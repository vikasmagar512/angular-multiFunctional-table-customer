import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/index';
import {LoaderState} from './loader/loaderState';

@Injectable()
export class LoaderServiceService {

  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }
  show() {
    this.loaderSubject.next(<LoaderState>{show: true});
  }
  hide() {
    this.loaderSubject.next(<LoaderState>{show: false});
  }
}
