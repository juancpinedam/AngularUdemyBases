import { Component } from '@angular/core';



@Component({
  selector:'app-heroe',
  templateUrl:'heroe.component.html'
})
export class HeroeComponent{

  nombre:string ='ironman';
  edad:number =34;

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return `${this.nombre}  -  ${this.edad}`;
  }


  cambiarNombre():void{
    if(this.nombre=='ironman')
      this.nombre = "spiderman";
    else
      this.nombre = "ironman";
  }


  cambiarEdad():void{
    this.edad += 15;
  }



}
