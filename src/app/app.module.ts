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
import {ModalModule, ProgressbarModule, TooltipModule} from 'ngx-bootstrap';
import {LoaderServiceService} from './loader-service.service';
// import { MaterialModule } from '@angular/material';
import {CustomHttpService} from './custom-http-service.service';
import {MatProgressBar} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {LoaderModule} from './loader/loader.module';


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
      { path: 'agreementNo/:id',  component:AgreementComponent}
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [ BrowserModule, DataTablesModule,ChartsAllModule,ChartsModule,  ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    MatProgressBarModule,
    ProgressbarModule,
    LoaderModule,
    MatProgressBarModule,
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
  ],
  exports:[],
  entryComponents: [ DetailsComponent,DashboardComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

