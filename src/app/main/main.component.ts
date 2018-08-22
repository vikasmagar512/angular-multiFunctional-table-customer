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
import { Router } from '@angular/router';

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
    customer:Customer;
    notification:Array<NotificationMne>;
  constructor(private authService:AuthService,
    private dataService:dataService,
    private notifyService:NotificationService,
    private modalService: BsModalService,
    private router:Router) {
    this.customer = dataService.getCustomer()
  }

  public modalRef: BsModalRef; // {1}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'}); // {3}
  }

  ngOnInit() {
    this.notification=this.notifyService.getNotification();

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

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  navigateTo(){
    this.router.navigate(['main/home/dashboard']);
  }
  /* onDoneClick(){
    alert("done click");
    console.log(this.dashboardComponent.setDashboardOptions());
    return this.dashboardComponent.setDashboardOptions();
    //this.NotificationComponent.setNotificationOptions();
  } */
}
