import {Component, OnInit, TemplateRef, ViewChild, Renderer, Renderer2, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public defaultSignInMethod :number;
  public frm: FormGroup;
  public isBusy = false;
  public hasFailed = false;
  public showInputErrors = false;
  public now: Date = new Date();

  public returnUrl: string;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private renderer2:Renderer2
    , private el: ElementRef
  ) {
    this.frm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  public modalRef: BsModalRef; // {1}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
  ngOnInit() {
    this.defaultSignInMethod = 0;
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // debugger
  }
  openCity(type) {
    console.log(type)
    this.defaultSignInMethod = type;
  }
  keytab(event){
    let element = event.srcElement.nextElementSibling; // get the sibling element
    debugger
    if(element == null){  // check if its null
      return;
    }else{
      element.focus();   // focus if not null
    }
}
takeMeNext(){
  debugger  
  this.renderer2.parentNode(this.el.nativeElement.nextElementSibling).focus();
}
  public doSignIn() {

    // Make sure form values are valid
    if (this.frm.invalid) {
      this.showInputErrors = true;
      return;
    }

    // Reset status
    this.isBusy = true;
    this.hasFailed = false;

    // Grab values from form
    const username = this.frm.get('username').value;
    const password = this.frm.get('password').value;

    // Submit request to API

    this.router.navigate(['main','home','dashboard']);
  /*    this.api
      .signIn(username, password)
      .subscribe(
        (response:any) => {
          console.log('response is ',response)
          this.auth.doSignIn(
            response.token,
            response.name
          );
          debugger
          if(!this.returnUrl){
            this.router.navigate(['main']);
          }else{
          // get return url from route parameters or default to '/'
            this.router.navigateByUrl(this.returnUrl);
          }
        },
        (error) => {
          this.isBusy = false;
          this.hasFailed = true;
        }
      );
      */
  }
}
