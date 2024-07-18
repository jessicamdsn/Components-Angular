import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent implements OnInit{

  estilo:string ="disable"
  corFundo:string = "purple"
  corDaFonte:string = "white"

  item:string = ""
  lista:string[] = []

  isEnable:boolean = true

constructor(){}
ngOnInit(): void {}

trocar(){
  if(this.estilo == "disable"){
    this.estilo = "enable"
  }else{
    this.estilo = "disable"
  }
}

adicionarLista(){
  this.lista.push(this.item)
}
}
