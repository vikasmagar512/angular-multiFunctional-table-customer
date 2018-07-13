import { Component, OnInit } from '@angular/core';
import {dataService} from '../dataService.service';
import {Agreement} from '../agreement';
import {Asset} from '../asset';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css','../table.css']
})
export class DetailsComponent implements OnInit {

  assetDetail: Array<Asset>;
  agreements: Array<Agreement>;
  category: Object;
  constructor(private dataService: dataService) { }

  ngOnInit() {
    this.assetDetail = this.dataService.getAssets();
    this.agreements = this.dataService.getAgreement();
    this.category = this.dataService.getAssetCategory();

    console.log(this.assetDetail);
  }

}
