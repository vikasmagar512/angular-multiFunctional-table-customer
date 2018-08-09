import { Component, OnInit, TemplateRef,ViewChild } from '@angular/core';
import {ApiService} from '../api.service';
import {AuthService} from '../auth.service';
import {Customer} from '../customer';
import {dataService} from '../dataService.service';
import {NotificationService } from '../notification.service';
import { NotificationMne } from '../notification';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { DashboardSettingComponent } from '../dashboard-module/dashboard-setting/dashboard-setting.component';
import { NotificationSettingComponent } from '../notification-module/notification-setting/notification-setting.component';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  @ViewChild(DashboardSettingComponent)
    private dashboardComponent: DashboardSettingComponent;

    @ViewChild(NotificationSettingComponent)
    private NotificationComponent: NotificationSettingComponent;
    message:string;
    customer:any;
    notification:Array<NotificationMne>;
  constructor(private authService:AuthService,
    private dataService:dataService,
    private notifyService:NotificationService,
    private modalService: BsModalService,
    private apiService:ApiService) {
    /* this.customer = dataService.getCustomer() */
  }

  public modalRef: BsModalRef; // {1}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'}); // {3}
  }

  ngOnInit() {
    this.notification=this.notifyService.getNotification();
    this.apiService.getLoggedInUserData().subscribe(
      data =>{
      
          console.log(data);
          data["address"]= "address address address address address "
          data["contact"]= "1234567890"
/*           "id": "123",
          "name": "demo Customer",
          "email": "demo@demo.com",
          "address": "address address address address address ",
          "img": "../../../assets/machine.svg",
 */          
this.customer=data;
      });
    // this.openModal(this.modalRef)
  } 
  doSignOut(){
    this.authService.doSignOut()
  }
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
  /* onDoneClick(){
    alert("done click");
    console.log(this.dashboardComponent.setDashboardOptions());
    return this.dashboardComponent.setDashboardOptions();
    //this.NotificationComponent.setNotificationOptions();
  } */
}
