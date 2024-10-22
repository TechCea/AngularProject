import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { EstadosPipe } from './estados.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, TitleCasePipe, LowerCasePipe, DatePipe,EstadosPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  name = 'kevin'
  apellido = 'ALVAREZ'
  date = '2002-02-20T13:59:31.238Z'
  estado = 0;
  constructor() {}

  ngOnInit() {

  }
  ChangeState(){
    this.estado = 1;
  }
  

  GetTextState(){
    const text = this.estado === 0 ? 'Pendiente' : 'Registrado';
    return text
  }
}
