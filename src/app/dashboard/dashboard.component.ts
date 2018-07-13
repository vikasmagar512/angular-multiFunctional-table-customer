import { Component, OnInit } from '@angular/core';
import {dataService} from '../dataService.service';
import {Asset} from '../asset';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  assetDetail:Array<Asset>;
  category:Object;
  constructor(private asset:dataService ) { }

  ngOnInit() {
    this.assetDetail=this.asset.getAssets();
    this.category = this.asset.getAssetCategory();
    console.log(this.assetDetail);
  }
}
