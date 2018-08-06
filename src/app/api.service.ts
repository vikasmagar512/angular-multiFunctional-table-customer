import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {SessionService} from './session.service';
  import {Observable} from 'rxjs/index';
  import 'rxjs-compat/add/operator/catch';
  import {HttpClient, HttpHeaders} from '@angular/common/http';
  import 'rxjs-compat/add/operator/map';

const API_URL = environment.apiUrl;

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ApiService{

  constructor( private http: HttpClient,
               private session: SessionService) { }
  public signIn(username: string, password: string) {
    const url = API_URL + '/sign-in'
    // const url = API_URL+'/users/signin'
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(url)
    return this.http
      .post(url, {
        username,
        password
      })
      .map(response => {
        console.log(response)
        return response})
      .catch(this.handleError);
  }

  public getAllTodos(): Observable<Todo[]> {
    // const options = this.getRequestOptions();
    // console.log('options is ',options)
    return this.http.get<Todo[]>(API_URL + '/todos')
  }
  public getLoggedInUserData() {
    // const options = this.getRequestOptions();
    // console.log('options is ',options)
    return this.http
      .get(API_URL + '/users/me')
  }
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
