import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { DedicatedNotificationComponent } from './dedicated-notification/dedicated-notification.component';
import { NotifPopUPWrapperComponent } from './notif-pop-upwrapper/notif-pop-upwrapper.component';
import { RealNotifComponent } from './real-notif/real-notif.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NotificationComponent, DedicatedNotificationComponent, NotifPopUPWrapperComponent, RealNotifComponent],
  declarations: [NotificationComponent, DedicatedNotificationComponent, NotifPopUPWrapperComponent, RealNotifComponent, NotificationSettingComponent]
})
export class NotificationModuleModule { }
