import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {

  private URL_GET_DATA_PARKING = 'http://localhost:8080/getDataParking';
  private URL_CONFIG_PARKING = 'http://localhost:8080/addConfigParking';

  constructor(private http: HttpClient) { }

  getDataParking() {
    return this.http.get(this.URL_GET_DATA_PARKING);
  }

}
