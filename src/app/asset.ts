import { Metric } from "./metric";

export interface Asset {
  "id":string;
  "category": string;
  "name": string;
  "location": string;
  "serialno": string;
  "supplier":string;
  "img":string;
  "status":Number;

  "metrics": Array<Metric>;
/*   "id":string,
  "category": string;
  "name": string;
  "location":string ,
  "serialNumber":string,
  "supplier": number,
  "img":string,
  "status":Number,
  "agreementNumber":string ,
  "scheduleNumber": number,
  "description":string ,
  "condition":string ,
  "quantity": number,
  "supplierBilling": 1,
  "cost": number,
  "rv": number,
  "registrationNumber":string ,
  "metrics": Array<Metric>;
 */}

    /* {
      "id": "02",
      "category": "Printer",
      "name": "Canon SW2014",
      "location": "Solna",
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
    }, */
