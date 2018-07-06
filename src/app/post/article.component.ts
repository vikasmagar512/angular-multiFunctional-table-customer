import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';

import { MyPost } from './mypost';
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import {Person} from './Person';
import { Subject } from 'rxjs';

@Component({
  template: `
        <div class="post-highlights2">
            <!--<p><b>Article-{{post.sn}}: {{post.title}}</b></p>-->
            <!--<p><b>Article-</b></p>-->
            <!--<p>Category: </p>-->
            <!--<p>Category: {{post.category}}</p>-->

          <div class="row top-header marginLRZero">
            <div class="col-md-4">
              <div class="xls">
                <img src="../../assets/24.png">
              </div>
            </div>
            <div class="col-md-8 pull-right">
              <div class="sie-btn">
                <button class="sieBtn 1num" (click)="loadTable(1)">
                  <img src="../../assets/26.svg">
                </button>
                <button class="sieBtn 2num" (click)="loadTable(2)">
                  <img src="../../assets/27.svg">
                </button>
                <button class="sieBtn 3num" (click)="loadTable(3)">
                  <img src="../../assets/28.svg">
                </button>
                <button class="sieBtn 4num" (click)="loadTable(4)">
                  <img src="../../assets/29.svg">
                </button>
              </div>
            </div>
          </div>
		    </div>
  `,
  styleUrls: ['../style.css']
})
export class ArticleComponent  {
  @Input() post: any;

  constructor(private http: Http) { }

}
