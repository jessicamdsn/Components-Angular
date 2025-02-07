import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TitleComponent} from './title/title.component';
import {CheckSampleComponent} from './check-sample/check-sample.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TitleComponent, CheckSampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'life-cycle';
  isAliveCheckSample:boolean = true

  disposeCheckSample():void{
    this.isAliveCheckSample = false
  }
}
