import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {AuthService} from '../auth.service';
import {Customer} from '../customer';
import {dataService} from '../dataService.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  customer:Customer;
  constructor(private authService:AuthService,private dataService:dataService) {
    this.customer = dataService.getCustomer()
  }
  ngOnInit() {
  }
  doSignOut(){
    this.authService.doSignOut()
  }
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}
