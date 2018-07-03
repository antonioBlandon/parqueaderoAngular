import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VehiculoModel } from '../model/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VigilanteService {

  private URL_BASE = 'http://localhost:8080/';
  private METHOD_ADD_VEHICLE = 'addVehicle';
  private METHOD_OUT_VEHICLE = 'outVehicle';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  addVehicle(vehiculo: VehiculoModel) {
    const url = this.URL_BASE + this.METHOD_ADD_VEHICLE;
    return this.http.post(url, vehiculo, this.httpOptions);
  }

  outVehicle(vehiculo: VehiculoModel) {
    const url = this.URL_BASE + this.METHOD_OUT_VEHICLE;
    return this.http.post(url, vehiculo, this.httpOptions);
  }

}
