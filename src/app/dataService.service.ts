import { Injectable, OnInit } from '@angular/core';
import { Asset } from './asset';
import { Metric } from "./metric";
import { Agreement } from './agreement';
import {Customer} from './customer';
import { SettingOptions } from './SettingOptions';
import { BehaviorSubject } from 'rxjs';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/index';
import 'rxjs-compat/add/operator/catch';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';

const API_URL ="http://192.168.10.33:8080";
@Injectable({
  providedIn: 'root'
})
export class dataService implements OnInit {

  /* private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable(); */

  constructor(private http:HttpClient) {
   /*  this.http.get<Asset[]>(API_URL + '/getAssetDetails')
   .subscribe(
    res =>{
      console.log('res is ',res)
      this.assets=res['response'];
    }); */
   }
  assetCategory = {
    "Coffee_Machine": "Coffee Machine",
    "Printer": "Printer",
    "Vaccum": "Vaccum"
  } 
  customer:Customer={
    "id":"123",
    "name":"vikas",
    "email":"vikasmagar512@gmail.com",
    "address":"vikasmagar512@gmail.com address address address address address ",
    "contact":"12312312313",
    "img":"../../../assets/machine.svg",
  }
  notificationOptions:Array<SettingOptions>=[
    {
      name:"Service Request",
      id:"1",
      selected:false
    },
    {
      name:"Change in Asset status",
      id:"2",
      selected:true
    },
    {
      name:"Product Request",
      id:"3",
      selected:true
    },
    {
      name:"Change in Contract status",
      id:"4",
      selected:false
    }
  ];

  dashboardOptions:Array<SettingOptions>=[
    {
      name:"Overall Cost",
      id:"1",
      selected:true
    },
    {
      name:"Downtime",
      id:"2",
      selected:false
    },
    {
      name:"Usage",
      id:"3",
      selected:false
    },
    {
      name:"Utilization",
      id:"4",
      selected:false
    }
  ];
  /* selectedOptions:Array<SettingOptions>=[]; */
  assets: Array<Asset>=[
    {
      "id": "01",
      "category": "Coffee_Machine",
      "name": "Coffee Machine",
      "status": 0,
      "location": "Bromma",
      "serialno": "CM12190",
      "supplier": "Siemens LLP",
      "img": "../../../assets/machine.svg",
      "metrics": [
        {
          "category": "Coffee Powder",
          "unit": "kg",
          "available": 45,
          "required": 10,
          "uptime": "80%",
          "usage": "300"
        },
        {
          "category": "Milk Powder",
          "unit": "kg",
          "available": 45,
          "required": 10,
          "uptime": "80%",
          "usage": "300"
        },
      ]
    },
    {
      "id": "02",
      "category": "Printer",
      "name": "Canon SW2014",
      "status": 1,
      "location": "Bromma",
      "serialno": "SR12190",
      "supplier": "ATOS LLP",
      "img": "../../../assets/printer.svg",
      "metrics": [
        {
          "category": "Cartridge",
          "unit": "#",
          "available": 15,
          "required": 20,
          "uptime": "95%",
          "usage": "2000"
        }
      ]
    },
    {
      "id": "03",
      "category": "Vaccum",
      "name": "Vaccum",
      "status": 2,
      "location": "Bromma",
      "serialno": "VC12190",
      "supplier": "ATOS LLP",
      "img": "../../../assets/broom.svg",
      "metrics": [
        {
          "category": "Motor",
          "unit": "#",
          "available": 1,
          "required": 2,
          "uptime": "850%",
          "usage": "20 Hrs 80m"
        }
      ]
    }
  ];

  agreements: Array<Agreement> = [
    {
      "id": "AGR01",
      "agreement_no": "AGR984567854",
      "type": "Annual",
      "contact": "James Bond",
      "start_date": "12th Dec 2014",
      "end_date": "14th June 2020",
      "termination_date": "14th June 2018",
      "payment_freq": "Monthly",
      "Remaining_term": "18 months",
      "term": "80 months",
      "dueDate": '15 May 2020',
      "amount": 'Kr 200',
      "status": 'Paid',
      "invoiceAddress": 'Bromma',
      "assets_covered": ["01", "02"]
    },
    {
      "id": "AGR02",
      "agreement_no": "AGR984567888",
      "type": "Month",
      "contact": "Tom Lee",
      "start_date": "12th Dec 2014",
      "end_date": "13th April 2022",
      "termination_date": "14th April 2018",
      "payment_freq": "Weekly",
      "Remaining_term": "17 months",
      "term": "70 months",
      "dueDate": '15 May 2020',
      "amount": 'Kr 200',
      "status": 'Paid',
      "invoiceAddress": 'Bromma',
      "assets_covered": ["03"]
    }
  ];

 ngOnInit(){
  alert('getAssets')   
 }
  dashSetting: Subject<Array<SettingOptions>> = new BehaviorSubject<Array<SettingOptions>>(this.dashboardOptions);
  currentDashSetting=this.dashSetting.asObservable();
  notifSetting: Subject<Array<SettingOptions>> = new BehaviorSubject<Array<SettingOptions>>(this.notificationOptions);
  currentNotifSetting=this.notifSetting.asObservable();

  changeSettings(options,typeOfSetting,isSuccess){
    /* debugger */
    let k = [...options]    
    if(isSuccess){
      if(typeOfSetting===1){
        //dashboard
        this.dashSetting.next(k);
      }else{
        //notifi
        this.notifSetting.next(k);
      }
    }else{
      if(typeOfSetting===1){
        //dashboard
        this.dashSetting.next(this.dashboardOptions);
      }else{
        //notifi
        this.notifSetting.next(this.notificationOptions);
      }
    }
  }
  sendSettings(options:Array<SettingOptions>,typeOfSetting){
    //api request
    // if(response.status==200){
      this.changeSettings(options,typeOfSetting,1)
    // }ese{
    //   this.changeSettings(options,typeOfSetting,0)  
    // }
  }
  getAgreement(){
    // getAgreement(): Observable<Agreement[]> {
    return this.agreements;
    // return this.http.get<Agreement[]>(API_URL + '/getAgreementDetails');
  }
  getAssets() {
    return this.assets;
    // getAssets():Observable<Asset[]> {
    // return this.http.get<Asset[]>(API_URL + '/getAssetDetails')
    // .subscribe(
    //  res =>
    //  {
    //   console.log("Asset Array",res);
    //  });
  }
  getCustomer():Customer {
    return this.customer;
  }
  getAssetCategory() {
    return this.assetCategory;
  }

  getNotificationOptions() {
    return this.notificationOptions;
  }

  getDashboardOptions() {
    return this.dashboardOptions;
  }

}
