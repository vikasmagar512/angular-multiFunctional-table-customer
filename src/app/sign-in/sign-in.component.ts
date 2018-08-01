import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
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

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService
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
  }
  openCity(type) {
    console.log(type)
    this.defaultSignInMethod = type;
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

    this.router.navigate(['main']);
     /*this.api
      .signIn(username, password)
      .subscribe(
        (response:any) => {
          console.log('response is ',response)
          this.auth.doSignIn(
            response.token,
            response.name
          );
          // this.router.navigate(['todos']);
          this.router.navigate(['main']);
        },
        (error) => {
          this.isBusy = false;
          this.hasFailed = true;
        }
      );*/
  }
}
