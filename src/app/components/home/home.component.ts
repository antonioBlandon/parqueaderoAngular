import { Component, OnInit, ViewChild } from '@angular/core';
import { VehiculoModel } from '../../model/vehiculo.model';

import { TableVehiclesComponent } from '../table-vehicles/table-vehicles.component';
import { DetailVehicleComponent } from '../detail-vehicle/detail-vehicle.component';
import { EnterVehicleComponent } from '../enter-vehicle/enter-vehicle.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('tableVehicles') tableVehicles: TableVehiclesComponent;
  @ViewChild('cardDetailVehicle') cardDetailVehicle: DetailVehicleComponent;
  @ViewChild('formEnterVehicle') formEnterVehicle: EnterVehicleComponent;

  vehiculo: VehiculoModel;

  constructor() {
  }

  ngOnInit() {
    this.formEnterVehicle.emitEvent
      .subscribe( data => {
        this.tableVehicles.agregarVehiculo(data);
      }
    );

    this.tableVehicles.emitEvent
      .subscribe( vehiculo => {
        this.cardDetailVehicle.verVehiculo(vehiculo);
    });

    this.cardDetailVehicle.emitEvent
    .subscribe( actualizar => {
      if (actualizar) {
        this.tableVehicles.obtenerVehiculos();
        this.cardDetailVehicle.actualizar = false;
      }
    });
  }

}
