import { Component, OnInit,Input} from '@angular/core';
import {NotificationService } from '../../notification.service';
import { NotificationMne } from '../../notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() data: Array<any>;
  constructor(private notifyService:NotificationService,private router:Router) { }

  ngOnInit() {
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
