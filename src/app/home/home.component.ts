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
  user:Object;
  constructor(private adService: AdService,private api:ApiService) {
  }

  ngOnInit() {
    this.ads = this.adService.getAds();
    this.activeComponent = 1;
    this.getTodos();
    this.getUserData();
  }
  getTodos(): void {
    this.api.getAllTodos().subscribe(todos => this.todos= todos);
  }
  getUserData(): void {
    this.api.getLoggedInUserData().subscribe(user => {
      debugger
      this.user = user
    });

  }

  loadComponent(componentNumber: Number) {
    this.activeComponent = componentNumber;
  }
}
