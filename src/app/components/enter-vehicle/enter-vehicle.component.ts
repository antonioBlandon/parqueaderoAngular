import { Component, OnInit } from '@angular/core';
import { VehiculoModel } from '../../model/vehiculo.model';

@Component({
  selector: 'app-enter-vehicle',
  templateUrl: './enter-vehicle.component.html',
  styleUrls: ['./enter-vehicle.component.css']
})
export class EnterVehicleComponent implements OnInit {

  vehiculo: VehiculoModel;

  constructor() { }

  ngOnInit() {
  }

  ingresarVehiculo(fromulario: any) {

  }

}
