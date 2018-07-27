import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { DedicatedNotificationComponent } from './dedicated-notification/dedicated-notification.component';
import { NotifPopUPWrapperComponent } from './notif-pop-upwrapper/notif-pop-upwrapper.component';
import { RealNotifComponent } from './real-notif/real-notif.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularDualListBoxModule,
    FormsModule
  ],
  exports: [NotificationComponent, DedicatedNotificationComponent, NotifPopUPWrapperComponent,
     RealNotifComponent,NotificationSettingComponent],
  declarations: [NotificationComponent, DedicatedNotificationComponent, 
    NotifPopUPWrapperComponent, RealNotifComponent, NotificationSettingComponent]
})
export class NotificationModuleModule { }
