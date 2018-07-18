import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { AdBannerComponent }    from './ad-banner.component';
import { AdDirective }          from './ad.directive';
import { AdService }            from './ad.service';

import { DataTablesModule } from 'angular-datatables';
import { DetailsComponent } from './details/details.component';
import { AssetComponent } from './asset/asset.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {AgreementComponent} from './agreement/agreement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartsAllModule} from './chartAll/charts.module';
import {ChartsModule} from 'ng2-charts';
import { SignInComponent } from './sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './api.service';
import {AuthService} from './auth.service';
import {SessionService} from './session.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CanActivateRoutesGuard} from './can-activate-routes.guard';
import { MainComponent } from './main/main.component';
import {BsDropdownModule, ModalModule, PopoverModule, ProgressbarModule, TooltipModule} from 'ngx-bootstrap';
import {LoaderServiceService} from './loader-service.service';
// import { MaterialModule } from '@angular/material';
import {CustomHttpService} from './custom-http-service.service';
import {MatProgressBar} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {LoaderModule} from './loader/loader.module';
/* import { TableDemoComponent } from './table-module/table-demo/table-demo.component'; */
import {TableModuleModule} from './table-module/table-module.module';
import {NotificationModuleModule} from './notification-module/notification-module.module'
import { DedicatedNotificationComponent } from './notification-module/dedicated-notification/dedicated-notification.component';
import { NavPopUpComponent } from './nav-pop-up/nav-pop-up.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  { path: 'main',
    canActivate: [
      CanActivateRoutesGuard
    ],
    component: MainComponent,
    children:[
      { path: '',  component:HomeComponent},
      { path: 'asset/:id',  component:AssetComponent},
      { path: 'agreementNo/:id',  component:AgreementComponent},
      { path: 'notifications/all',  component:DedicatedNotificationComponent}
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [ BrowserModule, DataTablesModule,ChartsAllModule,ChartsModule,  ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    MatProgressBarModule,
    ProgressbarModule,
    PopoverModule.forRoot(),
    LoaderModule,
    MatProgressBarModule,
    TableModuleModule,
    NotificationModuleModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
   ],
  providers: [
    AdService,
    CustomHttpService,
    ApiService,
    AuthService,
    SessionService,
    CanActivateRoutesGuard,
    LoaderServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpService,
      multi: true,
    }],
  declarations: [
    AppComponent,
    AdBannerComponent,
    AdDirective,
    DetailsComponent,
    AssetComponent,
    AgreementComponent,
    PageNotFoundComponent,
    HomeComponent,
    DashboardComponent,
    SignInComponent,
    MainComponent,
    NavPopUpComponent,
  ],
  exports:[],
  entryComponents: [ DetailsComponent,DashboardComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

