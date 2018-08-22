import { Component, OnInit } from '@angular/core';
import {dataService} from '../dataService.service';
import {Asset} from '../asset';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // templateUrl: './dashboardCarousel.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  assetDetail:Array<Asset>;
  category:Object;
  constructor(private asset:dataService ) { }
  public cupsColors: any[] = [
    {
      backgroundColor:"#ffd819"
    },
    {
      backgroundColor:"#efefef"
    },
  ];
  public papersColors: any[] = [
    {
      backgroundColor:"#5257ef"
    },
    {
      backgroundColor:"#efefef"
    },
  ];
  public hoursColors: any[] = [
    {
      backgroundColor:"#78b17f"
    },
    {
      backgroundColor:"#efefef"
    },
  ];

  ngOnInit() {
    this.assetDetail=this.asset.getAssets();
    this.category = this.asset.getAssetCategory();
    console.log(this.assetDetail);
  }
}
