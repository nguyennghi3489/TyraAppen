import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams }    from '@angular/http';
import { environment } from '../../../environments/environment';
import * as Rx from 'rxjs';
@Injectable()
export class BlogService {
	headers :Headers = new Headers();
  data
	private http:Http;
  constructor(http: Http) {
  	this.http = http;
  	this.headers.append('X-Parse-Application-Id',environment.XParseApplicationId);
  	this.headers.append('X-Parse-REST-API-Key',environment.XParseRESTAPIKey);
  }

  getDemoBlog(){
    let params: URLSearchParams = new URLSearchParams();
    params.set('school', "Tyra Demo");
    if(!this.data){
    	this.data = this.http.get(environment.TyraAPIUrl+'/classes/blogg_doc',{
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
