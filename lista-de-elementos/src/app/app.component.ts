import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaElementosComponent } from './lista-elementos/lista-elementos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, ListaElementosComponent] // ✅ Importamos RouterModule y el componente
})
export class AppComponent {
  title = 'lista-de-elementos';
};