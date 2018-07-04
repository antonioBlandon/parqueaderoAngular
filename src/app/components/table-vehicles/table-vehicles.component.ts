import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VehiculoModel } from '../../model/vehiculo.model';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-table-vehicles',
  templateUrl: './table-vehicles.component.html',
  styleUrls: ['./table-vehicles.component.css']
})
export class TableVehiclesComponent implements OnInit {

  @Output() emitEvent: EventEmitter<VehiculoModel> = new EventEmitter<VehiculoModel>();

  vehiculos: VehiculoModel[] = [];

  constructor(private vehiculoService: VehiculoService) {
    this.obtenerVehiculos();
  }

  ngOnInit() {
  }

  agregarVehiculo(vehiculo: VehiculoModel) {
    this.vehiculos.push(vehiculo);
  }

  obtenerVehiculos() {
    this.vehiculoService.getVehiclesInParking().subscribe( result => {
      this.vehiculos = result as VehiculoModel[];
    });
  }

  verDetalle(vehiculo: VehiculoModel) {
    this.emitEvent.emit(vehiculo);
  }

}
