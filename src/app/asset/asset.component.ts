import { Component, OnInit } from '@angular/core';
import {dataService} from '../dataService.service';
import {ActivatedRoute} from '@angular/router';
import {Asset} from '../asset';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css','../table.css']
})
export class AssetComponent implements OnInit {

  assets:Array<Asset>;
  id:String;
  asset:Asset
  constructor(private route: ActivatedRoute, private dataService: dataService) { }


  ngOnInit() {
    this.assets = this.dataService.getAssets()
    this.id = this.route.snapshot.paramMap.get('id');

    this.asset = this.assets.find((agr) => agr.id == this.id)
  }
}
