import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/index';
import {LoaderServiceService} from '../loader-service.service';
import {LoaderState} from './loaderState';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  show = true;
  private subscription: Subscription;
  constructor(private loaderService: LoaderServiceService) { }
  ngOnInit() {
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.show = state.show;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
