import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notif-pop-upwrapper',
  templateUrl: './notif-pop-upwrapper.component.html',
  styleUrls: ['./notif-pop-upwrapper.component.css']
})
export class NotifPopUPWrapperComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  viewAll(){
    this.router.navigate(['/main/home/notifications/all']);
  }

}
