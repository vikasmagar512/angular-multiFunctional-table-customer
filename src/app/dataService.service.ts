import { Injectable } from '@angular/core';
import { Asset } from './asset';
import { Metric} from "./metric";
import { Agreement } from './agreement';
import {Customer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class dataService {

  constructor() { }
  assetCategory={
    "Coffee_Machine":"Coffee Machine",
    "Printer":"Printer",
    "Vaccum":"Vaccum"
  }
  customer:Customer={
    "id":"123",
    "name":"vikas",
    "email":"vikasmagar512@gmail.com",
    "address":"vikasmagar512@gmail.com address address address address address ",
    "contact":"12312312313",
    "img":"../../../assets/machine.svg",
  }
  Assets: Array<Asset>=[
    {
      "id": "01",
      "category": "Coffee_Machine",
      "name": "Coffee Machine",
      "status":0,
      "location": "Bromma",
      "serialno": "CM12190",
      "supplier":"Siemens LLP",
      "img":"../../../assets/machine.svg",
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
      "status":1,
      "location": "Bromma",
      "serialno": "SR12190",
      "supplier":"ATOS LLP",
      "img":"../../../assets/printer.svg",
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
      "status":2,
      "location": "Bromma",
      "serialno": "VC12190",
      "supplier":"ATOS LLP",
      "img":"../../../assets/broom.svg",
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

  Agreement: Array<Agreement> = [
    {
      "id":"AGR01",
      "agreement_no": "AGR984567854",
      "type": "Annual",
      "contact": "James Bond",
      "start_date": "12th Dec 2014",
      "end_date": "14th June 2020",
      "termination_date": "14th June 2018",
      "payment_freq": "Monthly",
      "Remaining_term": "18 months",
      "term": "80 months",
      "assets_covered": ["01", "02"]
    },
   {
      "id":"AGR02",
      "agreement_no": "AGR984567888",
      "type": "Month",
      "contact": "Tom Lee",
      "start_date": "12th Dec 2014",
      "end_date": "13th April 2022",
      "termination_date": "14th April 2018",
      "payment_freq": "Weekly",
      "Remaining_term": "17 months",
      "term": "70 months",
      "assets_covered": ["03"]
    }
  ];

  getAgreement():Agreement[]{
    return this.Agreement;
  }
  getAssets():Asset[] {
    return this.Assets;
  }
  getCustomer():Customer {
    return this.customer;
  }
  getAssetCategory() {
    return this.assetCategory;
  }
}
