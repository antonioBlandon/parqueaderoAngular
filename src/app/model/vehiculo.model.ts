import { ParentEntity } from './parentEntity.model';

export class VehiculoModel extends ParentEntity {

    placa: string;
    fechaIngreso: number;
    cilindraje: number;
    fechaSalida: number;
    valorPagado: number;
    diasEnParqueadero: number;
    horasEnParqueadero: number;

}
