import { Component, OnInit } from '@angular/core';
import { VehiculoModel } from '../../model/vehiculo.model';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-table-vehicles',
  templateUrl: './table-vehicles.component.html',
  styleUrls: ['./table-vehicles.component.css']
})
export class TableVehiclesComponent implements OnInit {

  vehiculos: VehiculoModel[] = [];

  constructor(private vehiculoService: VehiculoService) {
    this.obtenerVehiculos();
  }

  ngOnInit() {
  }

  obtenerVehiculos() {
    this.vehiculoService.getVehiclesInParking().subscribe( result => {
      this.vehiculos = result as VehiculoModel[];
    });
  }

}
