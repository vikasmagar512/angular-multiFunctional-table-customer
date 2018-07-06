import { Component, OnInit } from '@angular/core';
import {AdService} from '../ad.service';
import {AdItem} from '../ad-item';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ads: AdItem[];
  activeComponent: Number;
  todos:Todo[];

  constructor(private adService: AdService,private api:ApiService) {
  }

  ngOnInit() {
    this.ads = this.adService.getAds();
    this.activeComponent = 1;
    this.getTodos();
  }
  getTodos(): void {
    this.api.getAllTodos().subscribe(todos => this.todos= todos);
  }

  loadComponent(componentNumber: Number) {
    this.activeComponent = componentNumber;
  }
}
