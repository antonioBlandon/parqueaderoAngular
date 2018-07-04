import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  URL = 'http://localhost:8080/getAllRegisters';

  constructor(private http: HttpClient) { }

  getRegister() {
    return this.http.get(this.URL);
  }

}
