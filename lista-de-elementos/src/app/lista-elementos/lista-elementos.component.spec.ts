import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-elementos',
  templateUrl: './lista-elementos.component.html',
  styleUrls: ['./lista-elementos.component.css'],
  standalone: true // ✅ ¡Esto lo hace un Standalone Component!
})
export class ListaElementosComponent {
  elementos: string[] = [];
  nuevoElemento: string = '';

  agregarElemento() {
    if (this.nuevoElemento.trim()) {
      this.elementos.push(this.nuevoElemento.trim());
      this.nuevoElemento = '';
    }
  }
};