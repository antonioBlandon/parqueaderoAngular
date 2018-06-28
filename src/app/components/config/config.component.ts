import { Component, OnInit } from '@angular/core';

import { ParqueaderoModel } from '../model/parqueadero.model';

import { ParqueaderoService } from '../../services/parqueadero.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  parqueadero: ParqueaderoModel;

  constructor(private parqueaderoService: ParqueaderoService) {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.parqueaderoService.getDataParking().subscribe( result => {
      this.parqueadero = result as ParqueaderoModel;
      console.log(this.parqueadero);
    });
  }

}
