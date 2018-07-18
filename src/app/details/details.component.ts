import {Component, OnInit, ViewChild} from '@angular/core';
import {dataService} from '../dataService.service';
import {Agreement} from '../agreement';
import {Asset} from '../asset';
import {TableData} from '../tableData';
import {Metric} from '../metric';
// import any = jasmine.Any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css','../table.css']
})
export class DetailsComponent implements OnInit {

  assetDetail: Array<Asset>;
  agreements: Array<Agreement>;
  category: Object;
  consumptionData: Array<any>;
  assetData: Array<any>;
  agreementData:Array<any>;
  searchValue = ""

  @ViewChild('assetTable') assetTableRef;
  @ViewChild('consumptionTable') consumptionTableRef;
  @ViewChild('agreementTable') agreementTableRef;

  onSearchKey(value: string) {
    this.searchValue = value;
    console.log(`this.searchValue ${this.searchValue}`)
    this.assetTableRef.globalSearch(this.searchValue)
    this.consumptionTableRef.globalSearch(this.searchValue)
    this.agreementTableRef.globalSearch(this.searchValue)
  }
  constructor(private dataService: dataService) {
    this.consumptionData=[]
  }

  ngOnInit() {
    this.assetDetail = this.dataService.getAssets();
    this.agreements = this.dataService.getAgreement();
    this.category = this.dataService.getAssetCategory();

    console.log(this.assetDetail);
    this.consumptionData = this.assetDetail.reduce((accumulator,asset: Asset) =>{
      return asset.metrics.reduce((acc,metric:Metric) =>{
        return acc.concat({
          "id":  asset.id,
          "name":'<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>',
          "unit": metric.unit,
          "category": metric.category,
          "location": asset.location,
          "available": metric.available,
          "required": metric.required
        })}
        ,accumulator)
    },[])

    console.log('this.consumptionData ',this.consumptionData)
    this.assetData = this.assetDetail.map((asset: Asset) => ({
        "id":  asset.id,
        // "name":  asset.name,
        "name":  '<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>',
        "status": '<img src="../../assets/'+ (!asset.status ? '09.png' : (asset.status ===1 ? '10.png' : '12.png')) +'" class="ass-size">',
        "location": asset.location,
        "action": '<div class="a-div bg-aqua mbot-2p">\n' +
        '                  <span>\n' +
        '                    <img src="../../assets/wrench.svg" class="a-size wd-10">\n' +
        '                  </span>\n' +
        '                <p class="c-white">Do it yourself</p>\n' +
        '              </div>\n' +
        '              <div class="a-div bg-lgrey">\n' +
        '                  <span>\n' +
        '                    <img src="../../assets/problem.svg" class="a-size wd-14">\n' +
        '                  </span>\n' +
        '                <p class="c-white">Report Incident</p>\n' +
        '              </div>',
      }));
    this.agreementData = this.agreements.map((agreement:Agreement) =>({
        "id":  agreement.id,
        // "name":  asset.name,
        "agreement_no":  '<a routerLink="main/agreementNo/'+agreement.id+'" routerLinkActive="active">'+agreement.agreement_no+'</a>',
        /* "agreement_no":  agreement.agreement_no, */
        "termination_date": agreement.termination_date,
        "location": "Bromma",
        "action": '<div class="a-div bg-aqua mbot-2p">\n' +
        '                  <span>\n' +
        '                    <img src="../../assets/upgrade.svg" class="a-size wd-24">\n' +
        '                  </span>\n' +
        '                <p class="c-white">Upgrade</p>\n' +
        '              </div>\n' +
        '              <div class="a-div bg-lgrey">\n' +
        '                  <span>\n' +
        '                    <img src="../../assets/terminated.svg" class="a-size wd-24">\n' +
        '                  </span>\n' +
        '                <p class="c-white">Terminated</p>\n' +
        '              </div>',
      }));
  }
  public consumptionColumns:Array<any> = [
    {title: 'Asset Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
    {title: 'Unit',name: 'unit',sort: false,filtering: {filterString: '', placeholder: 'Filter by Unit'}},
    {title: 'Catgory', className: ['office-header', 'text-success'], name: 'category', sort: 'asc'},
    {title: 'Location', name: 'location', sort: '', filtering: {filterString: '', placeholder: 'Filter by Location.'}},
    {title: 'Available', className: 'text-warning', name: 'available'},
    {title: 'Required', className: 'text-warning', name: 'required'},
  ];
  public consumptionConfig:any = {
    paging: true,
    sorting: {columns: this.consumptionColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table','table-striped', 'table-bordered']
  };

  public assetColumns:Array<any> = [
    {title: 'Asset Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
    {title: 'Status',name: 'status',sort: false},
    {title: 'Location', name: 'location', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
    {title: 'Action', className:[ 'text-warning'], name: 'action'},
  ];
  public assetConfig:any = {
    paging: true,
    sorting: {columns: this.assetColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table','table-striped', 'table-bordered']
  };

  public agreementColumns:Array<any> = [
    {title: 'Agreement No', name: 'agreement_no', filtering: {filterString: '', placeholder: 'Filter by name'}},
    {title: 'Location',name: 'location',sort: false,filtering: {filterString: '', placeholder: 'Filter by Unit'}},
    {title: 'Termination ', className: ['office-header', 'text-success'], name: 'termination_date', sort: 'asc', filtering: {filterString: '', placeholder: 'Filter by date.'}},
    {title: 'Action', name: 'action', sort: ''},
  ];
  public agreementConfig:any = {
    paging: true,
    sorting: {columns: this.agreementColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table','table-bordered']
  };
}
