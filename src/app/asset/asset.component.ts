import { Component, OnInit } from '@angular/core';
import {dataService} from '../dataService.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Asset} from '../asset';
import {Metric} from '../metric';
import {TableData} from '../tableData';
import {Location} from '@angular/common';
@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css','../table.css']
})
export class AssetComponent implements OnInit {

  assetDetail:Array<Asset>;
  id:String;
  assets:Asset;
  productData: Array<any>;
  serviceData:Array<any>;
  consumptionData: Array<any>;
  routeNow:string;
  constructor(private route: ActivatedRoute, private dataService: dataService,
              private _location:Location,
              router: Router) {
    this.productData=[]
    this.consumptionData = []
    this.serviceData = []
    this.id = this.route.snapshot.paramMap.get('id');
    // router.events.subscribe((val) => {
    //   this.id = this.route.snapshot.paramMap.get('id');
    //   debugger
    /*
          if(_location.path() != ''){
            this.routeNow = _location.path();
          } else {
            this.routeNow= 'Home'
          }
    */
    // });
  }
  backClicked() {
    this._location.back();
  }
  ngOnInit() {
    this.assetDetail = this.dataService.getAssets()
    // this.id = this.route.snapshot.paramMap.get('id');

    this.assets = this.assetDetail.find((agr) => agr.id == this.id)

    this.productData = this.assets.metrics.reduce((acc,metric: Metric) => {
      return acc.concat({
          /*"id":  asset.id,
           "name":'<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>', */
          "product_category":metric.category,
          "supplierName": this.assets.supplier,
          "requestDate": '15 Jan 2018',

          // "amount": "Kr 56",
          "amount": '<span class="bold">Kr</span>56',
          "invoice": '<span>'+
                      '<img src="../../assets/pdf.svg" class="ass-size">'+
                      '</span>'
        });
      },[]);

    this.serviceData = this.assets.metrics.reduce((acc,metric: Metric) => {
        return acc.concat({
          /*"id":  asset.id,
           "name":'<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>', */
          "service_category":metric.category,
          "supplierName": this.assets.supplier,
          "serviceDate": '15 Jan 2018',
          "amount": '<span class="bold">Kr</span>56',
          "invoice": '<span>'+
                      '<img src="../../assets/pdf.svg" class="ass-size">'+
                      '</span>'
        });
      },[]);

    this.consumptionData = this.assets.metrics.reduce((acc,metric: Metric) => {
        return acc.concat({
          "category":this.assets.category,
          "presentConsum": metric.unit,
          "forecastedConsum":metric.category,
          "recommend": this.assets.location,
        });
      },[]);
  }
  public productColumns:Array<any> = [
    {title: 'Category of Products', name: 'product_category', filtering: {filterString: '', placeholder: 'Search'},filter:'text'},
    {title: 'Supplier Name', className: ['office-header', 'text-success'], name: 'supplierName', sort: 'asc',filter:'text'},
    {title: 'Request Date', name: 'requestDate', sort: '', filtering: {filterString: '', placeholder: 'Search'},filter:'text'},
    {title: 'Amount', className: 'text-warning', name: 'amount',filter:'text'},
    {title: 'Invoice', name: 'invoice',filter:'text'}
  ];
  public productConfig:any = {
    paging: true,
    sorting: {columns: this.productColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table','table-bordered']
  };

  public serviceColumns:Array<any> = [
    {title: 'Category of service', name: 'service_category', filtering: {filterString: '', placeholder: 'Search'},filter:'text'},
    {title: 'Supplier Name', className: ['office-header', 'text-success'], name: 'supplierName', sort: 'asc',filter:'text'},
    {title: 'Date of service', name: 'serviceDate', sort: '', filtering: {filterString: '', placeholder: 'Search'},filter:'text'},
    {title: 'Amount', className: 'text-warning', name: 'amount',filter:'text'},
    {title: 'Invoice', name: 'invoice',filter:'text'}
  ];
  public serviceConfig:any = {
    paging: true,
    sorting: {columns: this.serviceColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table','table-bordered']
  };

  public consumptionColumns:Array<any> = [
    {title: 'Category', name: 'category', filtering: {filterString: '', placeholder: 'Search'},filter:'text'},
    {title: 'Present Consumption', className: ['office-header', 'text-success'], name: 'presentConsum', sort: 'asc',filter:'text'},
    {title: 'Forecasted Consumption', name: 'forecastedConsum', sort: '', filtering: {filterString: '', placeholder: 'Search'},filter:'text'},
    {title: 'Recomendation', className: 'text-warning', name: 'recommend',filter:'text'},
  ];
  public consumptionConfig:any = {
    paging: true,
    sorting: {columns: this.consumptionColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table','table-bordered']
  };
}
