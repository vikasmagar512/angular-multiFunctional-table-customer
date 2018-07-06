import {Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, SimpleChange} from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem }      from './ad-item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
              <div class="ad-banneri">
                <ng-template ad-host></ng-template>
              </div>
            `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  @Input() activeComponent;
  currentAdIndex;

  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.currentAdIndex = this.activeComponent;
    this.loadComponent();
  }
  ngOnChanges(changes : {[propKey:string]: SimpleChange}){
    let log : string [] =[];
    this.currentAdIndex = changes.activeComponent.currentValue
    this.loadComponent();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }
}
