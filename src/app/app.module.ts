import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule } from 'ng2-charts';
import {BsDropdownModule, ModalModule, PaginationModule, PopoverModule, ProgressbarModule, TabsModule, TooltipModule} from 'ngx-bootstrap';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { AgreementComponent } from './agreement/agreement.component';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { AssetComponent } from './asset/asset.component';
import { AuthService } from './auth.service';
import { CanActivateRoutesGuard } from './can-activate-routes.guard';
import { ChartsAllModule } from './chartAll/charts.module';

// import { MaterialModule } from '@angular/material';
import { CustomHttpService } from './custom-http-service.service';
import { DashboardModuleModule } from './dashboard-module/dashboard-module.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoaderServiceService } from './loader-service.service';
import { LoaderModule } from './loader/loader.module';
import { MainComponent } from './main/main.component';
import { NavPopUpComponent } from './nav-pop-up/nav-pop-up.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { DedicatedNotificationComponent } from './notification-module/dedicated-notification/dedicated-notification.component';
import { NotificationModuleModule } from './notification-module/notification-module.module';
import { SessionService } from './session.service';
import { SettingsComponent } from './settings/settings.component';
import { SignInComponent } from './sign-in/sign-in.component';
/* import { TableDemoComponent } from './table-module/table-demo/table-demo.component'; */
import { TableModuleModule } from './table-module/table-module.module';
import { StoreComponent } from './store/store.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {Ng2TableModule} from 'ng2-table';
  import * as moment from 'moment';
import { GdprComponent } from './gdpr/gdpr.component';
/*
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
      { path: 'notifications/all',  component:DedicatedNotificationComponent},
       /!* { path: 'store',  component:StoreComponent } *!/
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];*/
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
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home',  component:HomeComponent,
        children: [
          {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
          {path: 'dashboard', component: DashboardComponent, data: { activeComponent: '0'}},
          {path: 'details', component: DetailsComponent, data: { activeComponent: '1'}},
          /*{path: 'details', component: DetailsComponent, pathMatch: 'full',
            children:[
              {path: '', redirectTo: 'details', pathMatch: 'full'},
              {path: 'asset/:id', component: AssetComponent},
              {path: 'agreementNo/:id', component: AgreementComponent},
            ]
          },*/
          {path: 'asset/:id', component: AssetComponent},
          {path: 'agreementNo/:id', component: AgreementComponent},
        ]
      },
      // { path: 'asset/:id',  component:AssetComponent},
      // { path: 'agreementNo/:id',  component:AgreementComponent},
      { path: 'notifications/all',  component:DedicatedNotificationComponent},
        // { path: 'store',  component:StoreComponent }
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
    FormsModule,
    MatProgressBarModule,
    TableModuleModule,
    NotificationModuleModule,
    TabsModule.forRoot(),
    DashboardModuleModule,
    AngularFontAwesomeModule,

    Ng2TableModule,
    PaginationModule.forRoot(),

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
    SettingsComponent,
    StoreComponent,
    GdprComponent,
  ],
  exports:[],
  entryComponents: [ DetailsComponent,DashboardComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

