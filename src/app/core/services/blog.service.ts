import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams }    from '@angular/http';
// import 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/flatMap';
import * as Rx from 'rxjs';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
@Injectable()
export class BlogService {
	headers :Headers = new Headers();
	private http:Http;
  constructor(http: Http) {
  	this.http = http;
  	this.headers.append('X-Parse-Application-Id','12345');
  	this.headers.append('X-Parse-REST-API-Key','xyz');
  }

  getUser(){
     let params: URLSearchParams = new URLSearchParams();
     params.set('school', "Tyra Demo");
  	 return this.http.get('http://tyraserver-alfa.jelastic.elastx.net/parse/classes/blogg_doc',{
  		headers: this.headers,
      // body: params
      search: 'where={"school":"Tyra Demo"}'
  	})
    .flatMap(response => {
      let news = response.json().results;
      return Rx.Observable.from(news);
    })
    // .flatMap((item) => {
    //       return Rx.Observable.forkJoin(item.images.map((images) => {
    //         return this.http.get(`/authors/${author.id}`).map(res => res.json());
    //       });
    //     });

    // .filter(data => {
    //   return data["school"] == "Tyra Demo"
    // })
  }
}
