import { NgModule } from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {TechnologyComponent} from './technology.component';
import {ArticleComponent} from './article.component';
import {MyPostService} from './mypost.service';
import {MyPostBannerComponent} from './mypost-banner.component';
import {MyPostComponent} from './mypost.component';
import {MyPostDirective} from './mypost.directive';
import { DataFilterPipe } from './data-filter.pipe';

import { DataTablesModule } from 'angular-datatables';
  import { HttpClientModule }    from '@angular/common/http';
@NgModule({
  imports: [ BrowserModule, DataTablesModule,HttpClientModule],
  providers: [MyPostService],
  declarations: [
    MyPostBannerComponent,
    ArticleComponent,
    TechnologyComponent,
    MyPostComponent,
    MyPostDirective,
    DataFilterPipe
  ],
  entryComponents: [ ArticleComponent,TechnologyComponent,MyPostBannerComponent],
  exports:[MyPostBannerComponent,ArticleComponent,TechnologyComponent]
})
export class PostModule {}

