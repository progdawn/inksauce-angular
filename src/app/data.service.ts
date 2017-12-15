import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  
    fetchData(){
      return this.http.get('https://nn-angular-3abe7.firebaseio.com/.json')
    }

}
