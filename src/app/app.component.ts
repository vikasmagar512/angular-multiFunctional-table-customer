import { Component, OnInit } from '@angular/core';

import { AdService }         from './ad.service';
import { AdItem }            from './ad-item';
import {AuthService} from './auth.service';
import {ActivatedRoute,Router} from '@angular/router';
import {LoaderServiceService} from './loader-service.service';

@Component({
  selector: 'app-root',
  templateUrl :'./app.component.html',
  styleUrls: ['./style.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private  auth:AuthService,
              private route: ActivatedRoute,
              private router: Router){}
  doSignOut() {
    alert('df')
    this.auth.doSignOut();
    this.router.navigate(['/sign-in']);
  }
}

