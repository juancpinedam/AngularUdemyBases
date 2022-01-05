import { Component } from "@angular/core";


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./../../app.component.css']
})

export class ContadorComponent{
  title:string = 'Contador APP';
  otracosa:string = 'Contador APP2';
  numero:number = 0;
  base:number = 5;


  acumular(valor:number){
    this.numero +=valor;
  }


}
