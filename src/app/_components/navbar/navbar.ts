import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  ngOnInit(): void {
    this.message();
  }

  message(): void {
    console.log('Meu componente navbar inicializou (dentro da funcao)');
  }
}
