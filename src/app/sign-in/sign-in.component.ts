import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Observable} from 'rxjs/index';
import { moment } from 'ngx-bootstrap/chronos/test/chain';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public defaultSignInMethod :number;
  public frm: FormGroup;
  public frm1: FormGroup;
  public isBusy = false;
  public hasFailed = false;
  public showInputErrors = false;
  // public now: Date = new Date();
  public  myMoment;
  public returnUrl: string;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private authService:AuthService
  ) {
    this.frm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.frm1 = fb.group({
      personalNumber: ['', Validators.required]
    });
  }
  public modalRef: BsModalRef; // {1}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
  ngOnInit() {
    this.defaultSignInMethod = 0;
    this.myMoment= moment().format("Do MMM YYYY");
    
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  openCity(type) {
    console.log(type)
    this.defaultSignInMethod = type;
  }

  public doSignIn() {

    // Make sure form values are valid
    if (this.defaultSignInMethod){
      if(this.frm.invalid) {
        this.showInputErrors = true;
        return;
      }
    }else{
      if(this.frm1.invalid) {
        this.showInputErrors = true;
        return;
      }
    }

    // Reset status
    this.isBusy = true;
    this.hasFailed = false;

    // Grab values from form
    const username = this.frm.get('username').value;
    const password = this.frm.get('password').value;
    const personalNumber = this.frm1.get('personalNumber').value;

    // Submit request to API
    this.router.navigate(['main','home','dashboard']);
    /*let payload = this.defaultSignInMethod
      ?
      {
        username, password
      }:
      {
        // pno:personalNumber
        personalNo:personalNumber
      }
    this.api.signIn(payload).subscribe(
        (response:any) => {
          console.log('response is ',response)
         /!*this.auth.doSignIn(
            response.token,
            response.name
          );*!/
          debugger
          if(!this.returnUrl){
            this.router.navigate(['main']);
          }else{
          // get return url from route parameters or default to '/'
            this.router.navigateByUrl(this.returnUrl);
          }
        },
        (error) => {
          if (error.status === 401) {
            this.authService.doSignOut()
            //logout users, redirect to login page
            //redirect to the signin page or show login modal here
            this.router.navigate(['/sign-in']);
            //remember to import router class and declare it in the class
          }
          Observable.throw(error);
          this.isBusy = false;
          this.hasFailed = true;
        }
      );*/
  }
}
