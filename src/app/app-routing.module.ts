import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    {path: '', redirectTo: 'libros', pathMatch: 'full'}
    ,{ 
      path: 'categorias', children: [
       { path: '', component: CategoriasComponent },
       { path: 'edit/:id', component: CategoriasComponent },
    ]
    },   
    { path: 'autores', component: AutoresComponent },
    { path: 'libros', component: LibrosComponent }
  ];

  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }