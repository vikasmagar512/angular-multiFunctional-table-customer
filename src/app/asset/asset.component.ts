import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css','../table.css']
})
export class AssetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.hero$ = this.service.getHero(id);
  }


}
