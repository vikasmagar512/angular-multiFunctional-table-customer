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
    "Vacuum": "Vacuum Cleaner"
  }
  customer:Customer={
    "id":"123",
    "name":"demo Customer",
    "email":"demo@demo.com",
    "address":"address address address address address ",
    "contact":"1234567890",
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
      selected:false
    },
    {
      name:"Product Request",
      id:"3",
      selected:false
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
      selected:false
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
      "name": "Tech Lab Jura E8",
      "status": 0,
      "quantity":4,
      "location": "Solna",
      "serialno": "CM12190",
      "supplier": "ITS Nordic AB ",
      "img": "../../../assets/machine.svg",
      "metrics": [
        {
          "category": "Coffee Powder",
          "unit": "kg",
          "available": 45,
          "required": 10,
          "uptime": "80%",
          "usage": "300 Cups"
        },
        {
          "category": "Milk Powder",
          "unit": "kg",
          "available": 45,
          "required": 10,
          "uptime": "80%",
          "usage": "300 Cups"
        },
      ]
    },
    {
      "id": "02",
      "category": "Printer",
      "name": "Tech Lab Konica Minolta",
      "status": 1,
      "quantity":1,
      "location": "Solna",
      "serialno": "SR12190",
      "supplier": "ITS Nordic AB",
      "img": "../../../assets/printer.svg",
      "metrics": [
        {
          "category": "Cartridge",
          "unit": "#",
          "available": 15,
          "required": 20,
          "uptime": "95%",
          "usage": "27 Pages"
        }
      ]
    },
    {
      "id": "03",
      "category": "Vacuum",
      "name": "Vacuum Cleaner",
      "status": 2,
      "quantity":2,
      "location": "Solna",
      "serialno": "VC12190",
      "supplier": "ITS Nordic AB ",
      "img": "../../../assets/broom.svg",
      "metrics": [
        {
          "category": "Motor",
          "unit": "#",
          "available": 1,
          "required": 2,
          "uptime": "75%",
          "usage": "20 Hrs 50m"
        }
      ]
    },
    /*{
      "id": "03",
      "category": "Vacuum",
      "name": "Vacuum Cleaner",
      "status": 2,
      "location": "Solna",
      "serialno": "VC12190",
      "supplier": "ITS Nordic AB ",
      "img": "../../../assets/broom.svg",
      "metrics": [
        {
          "category": "Motor",
          "unit": "#",
          "available": 1,
          "required": 2,
          "uptime": "75%",
          "usage": "20 Hrs 50m"
        }
      ]
    },
    {
      "id": "03",
      "category": "Vacuum",
      "name": "Vacuum Cleaner",
      "status": 2,
      "location": "Solna",
      "serialno": "VC12190",
      "supplier": "ITS Nordic AB ",
      "img": "../../../assets/broom.svg",
      "metrics": [
        {
          "category": "Motor",
          "unit": "#",
          "available": 1,
          "required": 2,
          "uptime": "75%",
          "usage": "20 Hrs 50m"
        }
      ]
    },
    {
      "id": "03",
      "category": "Vacuum",
      "name": "Vacuum Cleaner",
      "status": 2,
      "location": "Solna",
      "serialno": "VC12190",
      "supplier": "ITS Nordic AB ",
      "img": "../../../assets/broom.svg",
      "metrics": [
        {
          "category": "Motor",
          "unit": "#",
          "available": 1,
          "required": 2,
          "uptime": "75%",
          "usage": "20 Hrs 50m"
        }
      ]
    }*/
  ];

  agreements: Array<Agreement> = [
    {
      "id": "A7815875",
      "agreement_no": "A7815875",
      "type": "Hyra",
      "contact": "Paal Vaage",
      "start_date": "12th Dec 2014",
      "end_date": "14th June 2020",
      "termination_date": "14 June 2018",
      "payment_freq": "Quaterly",
      "Remaining_term": "18 months",
      "term": "80 months",
      "dueDate": '15 May 2018',
      "amount": 'Kr 200',
      "status": 'Paid',
      "invoiceAmount": 'Kr 2000',
      "assets_covered": ["01", "02"]
    },
    {
      "id": "A7860136",
      "agreement_no": "A7860136",
      "type": "Leie",
      "contact": "Tomas Lind",
      "start_date": "12th Dec 2014",
      "end_date": "13th April 2022",
      "termination_date": "14 April 2018",
      "payment_freq": "Quaterly",
      "Remaining_term": "17 months",
      "term": "70 months",
      "dueDate": '15 June 2018',
      "amount": 'Kr 200',
      "status": 'Paid',
      "invoiceAmount": 'Kr 5500',
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
    // return this.notificationOptions;
    return this.currentNotifSetting;
  }

  getDashboardOptions() {
    // return this.dashboardOptions;
    return this.currentDashSetting;
  }

}
