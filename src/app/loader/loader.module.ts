import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import {MatProgressBar, MatProgressBarModule} from '@angular/material';
import {DetailsComponent} from '../details/details.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {LoaderServiceService} from '../loader-service.service';


@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
  ],
  providers:[LoaderServiceService],
  exports:[LoaderComponent],
  declarations: [LoaderComponent],
})
export class LoaderModule { }
