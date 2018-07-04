import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../../services/historial.service';
import { VehiculoModel } from '../../model/vehiculo.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  vehiculos: VehiculoModel[] = [];

  constructor(private historialService: HistorialService) {
    this.historialService.getRegister().subscribe( result => {
      this.vehiculos = result as VehiculoModel[];
    }, (error: HttpErrorResponse) => {
      alert('En este momento no se puede recuperar los registros. Intente mas tarde por favor.');
      console.error('Get Register: ' + error.name + ' *** ' + error.message);
    });
  }

  ngOnInit() {
  }

}
