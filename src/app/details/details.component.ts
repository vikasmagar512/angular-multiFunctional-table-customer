import { Component, OnInit } from '@angular/core';
import {dataService} from '../dataService.service';
import {Agreement} from '../agreement';
import {Asset} from '../asset';
import {TableData} from '../tableData';
import {Metric} from '../metric';
import any = jasmine.Any;
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

  constructor(private dataService: dataService) {}

  ngOnInit() {
    this.assetDetail = this.dataService.getAssets();
    this.agreements = this.dataService.getAgreement();
    this.category = this.dataService.getAssetCategory();

    console.log(this.assetDetail);
    const mData = [];
    this.assetDetail.map((asset: Asset) => {
      asset.metrics.map((metric: Metric) => {
        mData.push({
          "name": asset.name,
          "unit": metric.unit,
          "category": metric.category,
          "location": asset.location,
          "available": metric.available,
          "required": metric.required
        });
      });
    })
    this.consumptionData = mData;

    const mAssetData=[];
    this.assetDetail.map((asset: Asset) => {
      mAssetData.push({
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
      });
    });
    this.assetData = mAssetData;
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
    className: ['table-bordered']
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
    {title: 'Agreement No', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
    {title: 'Location',name: 'unit',sort: false,filtering: {filterString: '', placeholder: 'Filter by Unit'}},
    {title: 'Termination ', className: ['office-header', 'text-success'], name: 'category', sort: 'asc'},
    {title: 'Location', name: 'location', sort: '', filtering: {filterString: '', placeholder: 'Filter by Location.'}},
    {title: 'Available', className: 'text-warning', name: 'available'},
    {title: 'Required', className: 'text-warning', name: 'required'},
  ];
  public agreementConfig:any = {
    paging: true,
    sorting: {columns: this.agreementColumns},
    filtering: {filterString: ''},
    className: ['table-bordered']
  };

}
