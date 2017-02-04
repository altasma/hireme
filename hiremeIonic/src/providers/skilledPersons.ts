import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class SkilledPersons {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getSkilledPersons(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8080/api/skilledPersons')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }

 
}