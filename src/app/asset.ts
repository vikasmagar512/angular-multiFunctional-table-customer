
import { Metric } from "./metric";

export interface Asset {
  "id":string;
  "category": string;
  "name": string;
  "quantity":number,
  "location": string;
  "serialno": string;
  "supplier":string;
  "img":string;
  "status":Number;
  "metrics": Array<Metric>; 
}