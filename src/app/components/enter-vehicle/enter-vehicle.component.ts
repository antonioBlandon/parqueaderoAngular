import { Component, OnInit } from '@angular/core';
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

  vehiculo: VehiculoModel = new VehiculoModel();
  launchWarning = false;

  constructor(private vigilanteService: VigilanteService) { }

  ngOnInit() {
  }

  ingresarVehiculo(formulario: NgForm) {

    if ( formulario.valid ) {
      this.launchWarning = false;
      this.vigilanteService.addVehicle(this.vehiculo).subscribe( result => {
        alert('El vehiculo ingreso exitosamente');
      }, (error: HttpErrorResponse) => {
        console.log('Error Add Vehicle: ' + error.name + ' *** ' + error.message);
      });
    } else {
      this.launchWarning = true;
    }

  }

}
