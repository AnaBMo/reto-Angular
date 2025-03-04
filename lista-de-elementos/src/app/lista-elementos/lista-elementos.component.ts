import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Necesario para [(ngModel)]

@Component({
  selector: 'app-lista-elementos',
  templateUrl: './lista-elementos.component.html',
  styleUrls: ['./lista-elementos.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // ✅ Importamos CommonModule y FormsModule
})
export class ListaElementosComponent {
  elementos: string[] = [];
  nuevoElemento: string = '';

  agregarElemento() {
    if (this.nuevoElemento.trim()) {
      this.elementos.push(this.nuevoElemento.trim());
      this.nuevoElemento = ''; // ✅ Limpiamos el input después de agregar el elemento
    }
  }
};