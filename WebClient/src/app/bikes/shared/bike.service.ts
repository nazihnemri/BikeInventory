import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Bike} from'./bike.model'

@Injectable()
export class BikeService {
  selectedBike : Bike;
  bikeList : Bike[];
  
  show2 = false;
  
  constructor(private http : Http) { }

  postBike(emp : Bike){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:60202/api/Bike',body,requestOptions).map(x => x.json());
  }

  putBike(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:60202/api/Bike/' + id,
      body,
      requestOptions).map(res => res.json());
  }

  getBikeList(){
    this.http.get('http://localhost:60202/api/Bike')
    .map((data : Response) =>{
      return data.json() as Bike[];
    }).toPromise().then(x => {
      this.bikeList = x;
    })
  }

  deleteBike(id: number) {
    return this.http.delete('http://localhost:60202/api/Bike/' + id).map(res => res.json());
  }
}