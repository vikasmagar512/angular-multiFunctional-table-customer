import {Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import {dataService} from '../dataService.service';
import {Agreement} from '../agreement';
import {Asset} from '../asset';
import {TableData} from '../tableData';
import {Metric} from '../metric';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';


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
  // AssetTemplate: TemplateRef<any>
  @ViewChild('AssetTemplate') assetTemplate: TemplateRef<any>;
  @ViewChild('AgreementTemplate') agreementTemplate: TemplateRef<any>;

  public modalRef: BsModalRef; // {1}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'}); // {3}
  }

  onSearchKey(value: string) {
    this.searchValue = value;
    console.log(`this.searchValue ${this.searchValue}`)
    this.assetTableRef.globalSearch(this.searchValue)
    this.consumptionTableRef.globalSearch(this.searchValue)
    this.agreementTableRef.globalSearch(this.searchValue)
  }
  constructor(private dataService: dataService,
              private modalService: BsModalService) {
    this.consumptionData=[]
    // this.length = this.data.length;
  }
  assetIdSelected:string;
  openAssetModal(event){
    // debugger
    // console.log(event)
    // alert(event)
    this.assetIdSelected = event;
    this.openModal(this.assetTemplate)
  }

  agreementIdSelected:string;
  openAgreementModal(event){
    // debugger
    // console.log(event)
    // alert(event)
    this.agreementIdSelected = event;
    this.openModal(this.agreementTemplate)
  }
  ngOnInit() {
    // this.onChangeTable(this.config);
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
      "name":  '<a routerLink="main/home/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>',
      // "status": '<span class="fa fa-file-text-o if-size"></span>',
      "status": '<img src="../../assets/'+ (!asset.status ? '09.png' : (asset.status ===1 ? '10.png' : '12.png')) +'" class="ass-size">',
      "location": asset.location,
      "actionAsset": '<div class="a-div bg-aqua mbot-2p">\n' +
      '                  <span>\n' +
      '                    <img src="../../assets/wrench.svg" class="a-size wd-10">\n' +
      '                  </span>\n' +
      '                <p class="c-white service" data-id="'+asset.id+'">Do it yourself</p>\n' +
      '              </div>\n'
      /*  '              <div class="a-div bg-lgrey">\n' +
       '                  <span>\n' +
       '                    <img src="../../assets/problem.svg" class="a-size wd-14">\n' +
       '                  </span>\n' +
       '                <p class="c-white report"  data-id="'+asset.id+'">Report Incident</p>\n' +
       '              </div>' */,
    }));
    this.agreementData = this.agreements.map((agreement:Agreement) =>({
      "id":  agreement.id,
      // "name":  asset.name,
      "agreement_no":  '<a routerLink="main/agreementNo/'+agreement.id+'" routerLinkActive="active">'+agreement.agreement_no+'</a>',
      /* "agreement_no":  agreement.agreement_no, */
      "termination_date": agreement.termination_date,
      "location": "Bromma",
      "actionAgreement": '<div class="a-div bg-aqua mbot-2p">\n' +
      '                  <span>\n' +
      '                    <img src="../../assets/upgrade.svg" class="a-size wd-24">\n' +
      '                  </span>\n' +
      '                <p class="c-white">Uprade</p>\n' +
      '              </div>\n' /* +
        '              <div class="a-div bg-lgrey">\n' +
        '                  <span>\n' +
        '                    <img src="../../assets/terminated.svg" class="a-size wd-24">\n' +
        '                  </span>\n' +
        '                <p class="c-white">Terminated</p>\n' +
        '              </div>', */
    }));
  }
  public consumptionColumns:Array<any> = [
    {title: 'Asset Name', name: 'name', filtering: {filterString: '', placeholder: 'Search'},filter:'text'},
    {title: 'Unit',name: 'unit',sort: false,filter:'text'},
    {title: 'Category', className: ['office-header', 'text-success'], name: 'category', sort: 'asc',filtering: {filterString: '', placeholder: 'Search'},filter:'text'},
    {title: 'Location', name: 'location', sort: '', filtering: {filterString: '', placeholder: 'search'},filter:'text'},
    {title: 'Available', className: 'text-warning', name: 'available',filter:'text'},
    {title: 'Required', className: 'text-warning', name: 'required',filter:'text'},
  ];
  public consumptionConfig:any = {
    paging: true,
    sorting: {columns: this.consumptionColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table','table-striped', 'table-bordered']
  };

  public assetColumns:Array<any> = [
    {title: 'Asset Name', name: 'name', filtering: {filterString: '', placeholder: 'Search'},filter:'text'},
    {title: 'Status',name: 'status',sort: false,filter:'text'},
    {title: 'Location', name: 'location', sort: '', filtering: {filterString: '', placeholder: 'search'},filter:'text'},
    {title: 'Action', className:[ 'text-warning'], name: 'actionAsset',filter:'text'},
  ];
  public assetConfig:any = {
    paging: true,
    sorting: {columns: this.assetColumns},
    filtering: {filterString: ''},
    /* id: */
    className: ['third-t','s-table','table-striped', 'table-bordered']
  };

  public agreementColumns:Array<any> = [
    {title: 'Agreement No', name: 'agreement_no', filtering: {filterString: '', placeholder: 'Search'},filter:'text'},
    {title: 'Location',name: 'location',sort: false,filtering: {filterString: '', placeholder: 'Search'},filter:'text'},
    {title: 'Termination ', className: ['office-header', 'text-success'], name: 'termination_date', sort: 'asc', filtering: {filterString: '', placeholder: 'search'},filter:'text'},
    {title: 'Action', name: 'actionAgreement', sort: '',filter:'text'},
  ];
  public agreementConfig:any = {
    paging: true,
    sorting: {columns: this.agreementColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table','table-bordered']
  };

  /*public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
    {
      title: 'Position',
      name: 'position',
      sort: false,
      filtering: {filterString: '', placeholder: 'Filter by position'}
    },
    {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},
    {title: 'Extn.', name: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
    {title: 'Start date', className: 'text-warning', name: 'startDate'},
    {title: 'Salary ($)', name: 'salary'}
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };

  private data:Array<any> = TableData;

  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
  public tableChanged(data:any){
  }*/
  /*public columns:Array<any> = [{
    name: "id",
    title: "id"
  }, {
    name: "title",
    title: "title"
  }
  ];
  rows = [{
    id: '1',
    title: 'title test1'
  }, {
    id: '2',
    title: 'title test2'
  }, {
    id: '3',
    title: 'title test3'
  }]
  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-bordered']
  };*/

}
