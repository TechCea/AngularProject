import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-estructural',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estructural.component.html',
  styleUrl: './estructural.component.css'
})
export class EstructuralComponent {
  isError = false;
  constructor() {}

  sections = [
    {id: 1, name: 'Introducion', duration: '10:00'},
    {id: 2, name: 'Componente', duration: '20:00'},
    {id: 3, name: 'CLI', duration: '30:00'}
  ]

  ngOnInit(): void{
     setTimeout(() =>{
       this.sections.push({id: 2, name: 'Componente', duration: '20:00'});
     }, 800);
  }

  showError () {
    this.isError = true;
  }
}
