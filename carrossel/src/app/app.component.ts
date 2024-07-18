import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrosselComponent } from "./components/carrossel/carrossel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarrosselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carrossel';
}
