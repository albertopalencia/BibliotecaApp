
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ValidadorDirective } from './shared/directive/validador.directive';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CategoriasComponent } from './categorias/categorias.component';
import { AutoresComponent } from './autores/autores.component';
import { LibrosComponent } from './libros/libros.component';

import { CategoriaService } from './servicios/categoria.service';
import { LibroService } from './servicios/libro.service';
import { AutorService } from './servicios/autor.service';
import { AlertService } from './servicios/alert.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    AutoresComponent,
    LibrosComponent,
    ValidadorDirective  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [],
  providers: [
    CategoriaService,
    LibroService,
    AutorService,
    AlertService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
