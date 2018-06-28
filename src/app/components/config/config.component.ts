import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Components
import { ParqueaderoModel } from '../model/parqueadero.model';

// Services
import { ParqueaderoService } from '../../services/parqueadero.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  public parqueadero: ParqueaderoModel;

  constructor(private parqueaderoService: ParqueaderoService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.parqueaderoService.getDataParking().subscribe( result => {
      this.parqueadero = result as ParqueaderoModel;
      console.log(this.parqueadero);
    });
  }

  changeConfigData(formData) {
    console.log(formData);
    console.log(formData.value);
    console.log(this.parqueadero);
  }

}
