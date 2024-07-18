import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

produtos:string[]=[]
menuType:string = "user"

  constructor(){
    this.produtos=[
      "Mouse",
      "Teclado",
      "Cabo",
      "Font"
    ]
  }
  ngOnInit(): void {}
  adicionar(){
    this.produtos.push("new")
  }
  remover(index: number){
    this.produtos.splice(index,1)
  }
}
