import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams }    from '@angular/http';
import * as Rx from 'rxjs';
@Injectable()
export class BlogService {
	headers :Headers = new Headers();
  data
	private http:Http;
  constructor(http: Http) {
  	this.http = http;
  	this.headers.append('X-Parse-Application-Id','12345');
  	this.headers.append('X-Parse-REST-API-Key','xyz');
  }

  getDemoBlog(){
    let params: URLSearchParams = new URLSearchParams();
    params.set('school', "Tyra Demo");
    if(!this.data){
    	this.data = this.http.get('http://tyraserver-alfa.jelastic.elastx.net/parse/classes/blogg_doc',{
    		headers: this.headers,
        search: 'where={"school":"Tyra Demo"}'
    	})
      .flatMap(response => {
        let news = response.json().results;
        return Rx.Observable.from(news);
      })
      .publishReplay(10)
      .refCount();
      setTimeout(()=>{
        this.clearCache()
      },60000)
    } 
    return this.data
  }

  clearCache(){
    this.data = null;
  }
}
