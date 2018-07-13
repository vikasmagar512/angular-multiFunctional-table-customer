import { Metric } from "./metric";

export interface Asset{
      "id":string;
      "category": string;
      "name": string;
      "location": string;
      "serialno": string;
      "supplier":string;
      "img":string;
      "metrics": Array<Metric>;
    }

    /* {
      "id": "02",
      "category": "Printer",
      "name": "Canon SW2014",
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
    }, */
    