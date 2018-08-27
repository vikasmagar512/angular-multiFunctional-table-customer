import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dedicated-notification',
  templateUrl: './dedicated-notification.component.html',
  styleUrls: ['./dedicated-notification.component.css']
})
export class DedicatedNotificationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['main/home/dashboard']);

  }

}
