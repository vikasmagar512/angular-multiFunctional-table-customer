import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs/index';
import {
  HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { LoaderServiceService } from './loader-service.service';
import { SessionService } from './session.service';
import 'rxjs-compat/add/operator/do';
import { ok } from 'assert';
@Injectable()
export class CustomHttpService implements HttpInterceptor {
  constructor(private session: SessionService, private loaderService: LoaderServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show()
    if (this.session.accessToken) {
      alert('accessToken present')
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.session.accessToken}`
        }
      });
    }
    return next.handle(req)
      .do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 200) {
            console.log('Request successful')
            this.loaderService.hide()
          }
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log('401 Authentication issue')
            // redirect to the login route
            // or show a modal

          }
        }
      });
  }
  private getRequestOptions() {
    console.log('this.session.accessToken', this.session.accessToken)
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.accessToken
      })
    };
    return httpOptions;
  }


  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    return Observable.throw(error);
  }

  private onSuccess(res: Response): void {
    console.log('Request successful');
  }

  private onError(res: Response): void {
    console.log('Error, status code: ' + res.status);
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }
}
