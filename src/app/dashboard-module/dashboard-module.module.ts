import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSettingComponent } from './dashboard-setting/dashboard-setting.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AngularDualListBoxModule,
    FormsModule
  ],
  exports: [DashboardSettingComponent],
  declarations: [DashboardSettingComponent]
})
export class DashboardModuleModule { }
