import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Observable } from 'rxjs/index';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
import { CustomValidators } from '../CustomValidators';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  // public cookiePopupShow: boolean = true;
  // public cookiesEnable: boolean;

  public defaultSignInMethod: number;
  public frm: FormGroup;
  public frm1: FormGroup;
  public forgetPassFrm: FormGroup;
  public isBusy = false;
  public hasFailed = false;
  public showInputErrors = false;
  // public now: Date = new Date();
  public myMoment;
  public returnUrl: string;
  // mobnumPattern = "^((\\+91-?)|0)?[0-9]{6}$";
  // emailPattern = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$";
  // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  emailPattern = "^([a-z0-9._%+-]{1})+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  // emailPattern="/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/"

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    // this.cookiesEnable = false;
    this.frm = fb.group({
      username: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
    this.forgetPassFrm = fb.group({
      username: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
    });
    this.frm1 = fb.group({
      personalNumber: ['', [
        Validators.required,
        Validators.pattern('[0-9]{12}$'),
        // Validators.pattern(this.mobnumPattern),
        // Validators.minLength(3),
        // Validators.maxLength(5)
      ]
      ]
    });
  }
  public modalRef: BsModalRef; // {1}

  // convenience getter for easy access to form fields
  get emailPasswordFieldGetter() { return this.frm.controls; }
  get emailForgetFieldGetter() { return this.forgetPassFrm.controls; }
  get bankIDFieldGetter() { return this.frm1.controls; }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
  ngOnInit() {
    this.defaultSignInMethod = 0;
    this.myMoment = moment().format("Do MMMM YYYY");

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    // let consent = this.getCookie("consent")
    // this.cookiePopupShow = consent !== "yes"
  }
  openCity(type) {
    console.log(type)
    this.defaultSignInMethod = type;
  }

  public doSignIn() {
    this.showInputErrors = this.defaultSignInMethod ? (this.frm.invalid) : (this.frm1.invalid)
    if (!this.showInputErrors) {

      // Reset status
      this.isBusy = true;
      this.hasFailed = false;

      // // Grab values from form
      const username = this.frm.get('username').value;
      const password = this.frm.get('password').value;
      const personalNumber = this.frm1.get('personalNumber').value;
      // // Submit request to API
      this.router.navigate(['main', 'home', 'dashboard']);
      let payload = this.defaultSignInMethod
        ?
        {
          username, password
        } :
        {
          pno: personalNumber
          // personalNo:personalNumber
        }
      this.api.signIn(payload).subscribe(
        (response: any) => {
          console.log('response is ', response)
          this.auth.doSignIn(
            response.token,
            response.name
          );
          if (!this.returnUrl) {
            this.router.navigate(['main']);
          } else {
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
      );
    } else {
      alert('Please enter correct credentials')
      return
    }
  }
  // useCookies(cookiesEnable: boolean) {
  //   debugger;
  //   this.cookiesEnable = cookiesEnable;
  //   this.cookiePopupShow = false;
  //   // this.cookiePopupShow = true;
  //   if (cookiesEnable) {
  //     document.cookie = "consent = yes";
  //     // this.cookiePopupShow= true;
  //   }
  //   else {
  //     document.cookie = "consent = no";
  //     // this.cookiePopupShow= true;
  //   }
  // }

  // getCookie(cname) {
  //   let name = cname + "=";
  //   let decodedCookie = decodeURIComponent(document.cookie);
  //   let ca = decodedCookie.split(';');
  //   for (let i = 0; i < ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }
}
