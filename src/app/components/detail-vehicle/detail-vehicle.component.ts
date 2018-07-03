import { Component, OnInit } from '@angular/core';
import { VehiculoModel } from '../../model/vehiculo.model';
import { VigilanteService } from '../../services/vigilante.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail-vehicle',
  templateUrl: './detail-vehicle.component.html',
  styleUrls: ['./detail-vehicle.component.css']
})
export class DetailVehicleComponent implements OnInit {

  vehiculo: VehiculoModel;

  constructor(private vigilanteService: VigilanteService) { }

  ngOnInit() {
    this.vehiculo = new VehiculoModel();
  }

  cobrar() {
    console.log(this.vehiculo);
    this.vigilanteService.outVehicle(this.vehiculo).subscribe(result => {
      this.vehiculo = result['vehiculo'];
    }, ( error: HttpErrorResponse) => {

    });
  }

  verVehiculo(vehiculo: VehiculoModel) {
    this.vehiculo = vehiculo;
  }

}
