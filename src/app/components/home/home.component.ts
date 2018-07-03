import { Component, OnInit } from '@angular/core';
import { VehiculoModel } from '../../model/vehiculo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vehiculo: VehiculoModel;

  constructor() { }

  ngOnInit() {
  }

  obtenerVehiculos() {

  }

}
