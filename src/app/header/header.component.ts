import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  currentDate: Date | null = null;
  
  resultado: number = 0;

  constructor() {}

  ngOnInit() {
      this.currentDate = new Date;
  }

  sumar(a: number, b: number){
    this.resultado=  a + b;
  }
}
