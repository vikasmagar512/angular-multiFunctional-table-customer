import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {environment} from '../environments/environment';
import {SessionService} from './session.service';
import {Observable} from 'rxjs/index';
import 'rxjs-compat/add/operator/catch';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ApiService {

  constructor( private http: HttpClient,
               private session: SessionService) { }
  public signIn(username: string, password: string) {
    debugger
    // const url = API_URL + '/sign-in'
    const url = API_URL+'/users/signin'
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(url)
    return this.http
      // .post(API_URL + '/sign-in', {
      .post(url, {
        username,
        password
      // },httpOptions)
      })
      .map(response => {
        console.log(response)
        return response})
      .catch(this.handleError);
  }
  private getRequestOptions() {
    console.log('this.session.accessToken',this.session.accessToken)
    // const headers = new Headers({
    //   'Authorization': 'Bearer ' + this.session.accessToken
    // });
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.accessToken
      })
    };

    return httpOptions;
  }
  public getAllTodos(): Observable<Todo[]> {
    const options = this.getRequestOptions();
    console.log('options is ',options)
    return this.http
      .get<Todo[]>(API_URL + '/todos', options)
  }
  public getLoggedInUserData() {
    const options = this.getRequestOptions();
    console.log('options is ',options)
    return this.http
      .get(API_URL + '/users/me', options)
  }
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
