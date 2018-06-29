import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { ParqueaderoModel } from '../model/parqueadero.model';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {

  private URL_GET_DATA_PARKING = 'http://localhost:8080/getDataParking';
  private URL_CONFIG_PARKING = 'http://localhost:8080/addConfigParking';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private parqueadere: ParqueaderoModel;

  constructor(private http: HttpClient) { }

  getDataParking() {
    return this.http.get(this.URL_GET_DATA_PARKING);
  }

  changeConfigData(parqueadero: ParqueaderoModel) {
    return this.http.post(this.URL_CONFIG_PARKING, parqueadero, this.httpOptions)
      .subscribe( result => {
        console.log(result);
      }, (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      });
  }

}
