import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSettingComponent } from './dashboard-setting/dashboard-setting.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DashboardSettingComponent],
  declarations: [DashboardSettingComponent]
})
export class DashboardModuleModule { }
