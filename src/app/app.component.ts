import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AtributoComponent } from "./atributo/atributo.component";
import { EstructuralComponent } from "./estructural/estructural.component";
import { PipesComponent } from "./pipes/pipes.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AtributoComponent, EstructuralComponent, PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'AngularProject';
}
