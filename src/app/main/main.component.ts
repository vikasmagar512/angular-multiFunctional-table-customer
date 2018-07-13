import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  doSignOut(){
    this.authService.doSignOut()
  }
}
