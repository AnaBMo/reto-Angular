import { Routes } from '@angular/router';
import { ListaElementosComponent } from './lista-elementos/lista-elementos.component';

export const routes: Routes = [
  { path: '', component: ListaElementosComponent } // ✅ Ahora Angular sabe que debe renderizarlo en "/"
];