import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarrosselComponent {
  
  slides = [
    {
      name: 'Rosa claro',
      img: 'https://www.colorhexa.com/ffb6c1.png',
    },
  
    {
      name: 'Rosa bebê',
      img: 'https://www.colorhexa.com/f4c2c2.png',
    },
  
    {
      name: 'Rosa choque',
      img: 'https://www.colorhexa.com/ff69b4.png',
    },
  
    {
      name: 'Rosa escuro',
      img: 'https://www.colorhexa.com/e75480.png',
    },
  
    {
      name: 'Rosa pastel',
      img: 'https://www.colorhexa.com/fadadd.png',
    },
  
    {
      name: 'Rosa magenta',
      img: 'https://www.colorhexa.com/ff00ff.png',
    },
  ];
  
  
}
