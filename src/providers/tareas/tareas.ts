import { Injectable } from '@angular/core';

/*
  Generated class for the TareasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareasProvider {

  private tareas = [];
  constructor() {
    console.log('Hello TareasProvider Provider');
  }

  obtenerTareas(){
    return this.tareas;
  }

  agregarTarea(tarea){
    this.tareas.push(tarea);
  }

}
