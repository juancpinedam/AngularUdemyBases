import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  personas:string[]=["juan","pedro","andres","adriana"];
  borrado:string="";
  fueBorrado:boolean=false;


  borrarPersona(index:number){
    this.borrado=this.personas[index];
    this.fueBorrado=true;
    this.personas.splice(index,1);
  }

}
