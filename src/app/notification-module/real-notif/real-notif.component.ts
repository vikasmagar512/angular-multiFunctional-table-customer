import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../notification.service';
import { NotificationMne } from '../../notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-real-notif',
  templateUrl: './real-notif.component.html',
  styleUrls: ['./real-notif.component.css']
})
export class RealNotifComponent implements OnInit {

  constructor(private notifyService:NotificationService,private router:Router) { }
  
  notification:Array<NotificationMne>;
  ngOnInit() {
    this.notification=this.notifyService.getNotification();
  }
  navigateTo(notif:NotificationMne){
    debugger
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
