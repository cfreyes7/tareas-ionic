import { Injectable } from '@angular/core';

/*
  Generated class for the TareasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareasProvider {

  private tareas = [];
  private tareasArchivadas = [];
  constructor() {
    console.log('Hello TareasProvider Provider');
  }

  obtenerTareas(){
    return this.tareas;
  }

  agregarTarea(tarea){
    this.tareas.push(tarea);
  }

  archivarTarea(indiceTarea){
    const tarea = this.tareas[indiceTarea];
    this.tareasArchivadas.push(tarea);
    this.tareas.splice(indiceTarea,1);
  }

  obtenerTareasArchivadas(){
    return this.tareasArchivadas;
  }

  editarTarea(indiceTarea,nuevaTarea){
    this.tareas[indiceTarea] = nuevaTarea;
  }

}
