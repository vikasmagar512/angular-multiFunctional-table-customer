import { Component, OnInit } from '@angular/core';
import { dataService } from '../dataService.service';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.css']
})
export class GdprComponent implements OnInit {

  public cookiesEnable: boolean = false;
  public cookiePopupShow: boolean = true;


  constructor(private dataService: dataService, ) { }

  ngOnInit() {
    let consent = this.getCookie("consent")
    this.cookiePopupShow = consent !== "yes"
  }


  useCookies(cookiesEnable: boolean) {
    debugger;
    this.cookiesEnable = cookiesEnable;
    this.cookiePopupShow = false;
    document.cookie = `consent = ${cookiesEnable ? 'yes' : 'no'}` 
    //  cookiesEnable ?  "consent = yes" : "consent = no";
  }

  getCookie(cname) {
    let name = cname + "=";
    let ca = decodeURIComponent(document.cookie).split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
