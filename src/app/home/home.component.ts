import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdService} from '../ad.service';
import {AdItem} from '../ad-item';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs/index';
import {ActivatedRoute, NavigationEnd, Router, UrlSegment} from '@angular/router';
import 'rxjs-compat/add/operator/filter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  ads: AdItem[];
  activeComponent: Number;
  todos:Todo[];
  user:Object;
  segments: UrlSegment[]
  constructor(private adService: AdService,private api:ApiService, private router:Router,private activatedRoute: ActivatedRoute) {
    this.segments = activatedRoute.snapshot.url;
  }

  ngOnDestroy(){
    // this.router.unsubscribe();
  }

  ngOnInit() {
    this.router.events
      .filter((event: any) => event instanceof NavigationEnd)
      .subscribe((val) => {
      const currentPage = this.router.url; // Current page route

      if(!currentPage.includes('dashboard')){
        // alert('dashboard')
        this.activeComponent = 1;
      }else {
        // alert('details')
        this.activeComponent = 0;
      }
    });
    /*this.router.events.filter((event: any) => event instanceof NavigationEnd)
      .subscribe(() => {
        // var root = this.router.routerState.snapshot.root;
        var root = this.router.routerState.url;
        console.log('root ',root )
        while (root) {

          if (root.children && root.children.length) {

            root = root.children[0];
          } else if (root.data && root.data["activeComponent"]) {
            console.log('root.data  ',root.data )
            // this.pageTitle = root.data["title"];
            return;
          } else {
            return;
          }
        }
      });*/
    this.ads = this.adService.getAds();

    // setInterval(()=>
    //   this.getTodos(),5000
    // )
    // this.getUserData();
  }
  getTodos(): void {
    this.api.getAllTodos().subscribe(todos => this.todos= todos);
  }
  getUserData(): void {
    this.api.getLoggedInUserData().subscribe(user => {
      this.user = user
    });
  }

  loadComponent(componentNumber: Number) {
    // this.activeComponent = componentNumber;
    // this.router.navigateByUrl(componentNumber ? 'main/home/details' : 'main/home/dashboard' );
    let url = componentNumber ? 'main/home/details' : 'main/home/dashboard'
    this.router.navigate([url]);
  }
}
