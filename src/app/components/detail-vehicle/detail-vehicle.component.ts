import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VehiculoModel } from '../../model/vehiculo.model';
import { VigilanteService } from '../../services/vigilante.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail-vehicle',
  templateUrl: './detail-vehicle.component.html',
  styleUrls: ['./detail-vehicle.component.css']
})
export class DetailVehicleComponent implements OnInit {

  @Output() emitEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  vehiculo: VehiculoModel;
  actualizar: false;

  constructor(private vigilanteService: VigilanteService) { }

  ngOnInit() {
    this.vehiculo = new VehiculoModel();
  }

  cobrar() {
    console.log(this.vehiculo);
    this.vigilanteService.outVehicle(this.vehiculo).subscribe(result => {
      this.vehiculo = result['objectReturn'];
      this.emitEvent.emit(!this.actualizar);
    }, ( error: HttpErrorResponse) => {

    });
  }

  verVehiculo(vehiculo: VehiculoModel) {
    this.vehiculo = vehiculo;
  }

}
