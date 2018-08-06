import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../notification.service';
import { NotificationMne } from '../../notification';
import { Router } from '@angular/router';
//import { MIN_LENGTH_VALIDATOR } from '@angular/forms';

@Component({
  selector: 'app-real-notif',
  templateUrl: './real-notif.component.html',
  styleUrls: ['./real-notif.component.css']
})
export class RealNotifComponent implements OnInit {

  constructor(private notifyService:NotificationService,private router:Router) { }
  id:any;
  notifications:Array<NotificationMne>;
  ngOnInit() {
    let that = this;
    this.notifications = this.notifyService.getNotification(); 
    setInterval(function(){
      that.notifications = that.notifyService.getNotification(); 
      //console.log('getNotification')
    }, 5000);
  }

  navigateTo(notif:NotificationMne){

    switch(notif.type){
      case 'asset':
        this.router.navigate(['/main/asset/',notif['contentId'] ]);
        break;
      case 'agreement':
        this.router.navigate(['/main/agreement/',notif['contentId'] ]);
        break;        
      default:
        alert('default')
        console.log('default')
    }
  }

}
