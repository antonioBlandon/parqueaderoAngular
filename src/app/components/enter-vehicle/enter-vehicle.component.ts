import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VehiculoModel } from '../../model/vehiculo.model';
import { NgForm } from '@angular/forms';
import { VigilanteService } from '../../services/vigilante.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-enter-vehicle',
  templateUrl: './enter-vehicle.component.html',
  styleUrls: ['./enter-vehicle.component.css']
})
export class EnterVehicleComponent implements OnInit {
  @Output() emitEvent: EventEmitter<VehiculoModel> = new EventEmitter<VehiculoModel>();

  vehiculo: VehiculoModel;
  launchWarning = false;

  constructor(private vigilanteService: VigilanteService) { }

  ngOnInit() {
    this.vehiculo = new VehiculoModel();
    this.vehiculo.cilindraje = 0;
  }

  ingresarVehiculo(formulario: NgForm) {

    if ( formulario.valid ) {
      this.launchWarning = false;
      this.vigilanteService.addVehicle(this.vehiculo).subscribe( result => {
        this.emitEvent.emit(this.vehiculo);
        alert('El vehiculo ingreso exitosamente');
      }, (error: HttpErrorResponse) => {
        console.log('Error Add Vehicle: ' + error.name + ' *** ' + error.message);
      });
    } else {
      this.launchWarning = true;
    }

  }

}
