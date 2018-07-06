import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { ArticleComponent }  from './article.component';
import { TechnologyComponent }  from './technology.component';
import { PostItem } from './post-item';
import { MyPost } from './mypost';
import {Observable} from 'rxjs/index';
import {Person} from './Person';
import {Http} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class MyPostService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver,private http: HttpClient,) { }

	loadComponent(viewContainerRef: ViewContainerRef, postItem: PostItem) {
      console.log(postItem)
		let componentFactory = this.componentFactoryResolver
		                      .resolveComponentFactory(postItem.component);
		viewContainerRef.clear();
		let componentRef = viewContainerRef.createComponent(componentFactory);
		let myPost: MyPost = <MyPost>componentRef.instance;
		myPost.post = postItem.data;
	}
	getAllPosts() {
		return [
      new PostItem(TechnologyComponent, {name: 'Angular 2',
        description: 'Angular is a platform that makes it easy to build applications with the web.'}),
      new PostItem(TechnologyComponent, {name: 'Angular 4',
        description: 'Angular is a platform that makes it easy to build applications with the web.'}),
/*
      new PostItem(ArticleComponent, {sn: "1",
		      title: 'Angular 2 Routing and Navigation Example', category: 'Angular 2'}),

		  new PostItem(ArticleComponent, {sn: "4",
		      title: 'Spring Boot Change Default Server Port', category: 'Spring Boot'})*/
		];
  }

  getPersonsData(dataNumber:number): Observable<Person[]> {
    let url = "assets/data.json";
    //send request for the specific data that we want using dataNumber
    return this.http.get<any>(url)
  }
}
