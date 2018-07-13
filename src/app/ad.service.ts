import { Injectable }           from '@angular/core';
import { AdItem }               from './ad-item';
import {DetailsComponent} from './details/details.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@Injectable()
export class AdService {
  getAds() {
    return [
      /* new AdItem(TechnologyComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),*/
      /*new AdItem(TechnologyComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),*/

      new AdItem(DashboardComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
      /*new AdItem(ArticleComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),*/
      new AdItem(DetailsComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),
      /*
      new AdItem(MyPostBannerComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),
        */
    ];
  }

}
