import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private URL_GET_DATA_PARKING = 'http://localhost:8080/getAllVehicles';

  constructor(private http: HttpClient) { }

  getVehiclesInParking() {
    return this.http.get(this.URL_GET_DATA_PARKING);
  }

}
