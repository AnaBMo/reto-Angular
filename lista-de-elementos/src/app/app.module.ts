import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaElementosComponent } from './lista-elementos/lista-elementos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaElementosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }