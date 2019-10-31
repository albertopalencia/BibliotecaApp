import { LibroService } from './../servicios/libro.service';
import { Autor } from './../shared/autor.model';
import { Libro } from './../shared/libro.model';
import { Categoria } from '../shared/categoria.model';
import { CategoriaService } from '../servicios/categoria.service';


import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AutorService } from '../servicios/autor.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html', 
  styles: []
})
export class LibrosComponent implements OnInit {

  formData: Libro;
  filtroData: Libro;
  libros: Libro[] = [];
  categorias: Categoria[] = [];
  autores: Autor[] = [];
  constructor(private serviceCategoria: CategoriaService, private serviceAutor: AutorService,
    private serviceLibro: LibroService) { }

  ngOnInit() {
    this.resetForm(); 
    
    this.filtroData =  {
      Id: 0,
      Nombre: '',
      IdAutor: 0,      
      IdCategoria: 0,
      Isnb: ''
    }

    this.getCategorias();
    this.getAutores();
    this.getLibros();

  }


  resetForm(form?: NgForm){
    if(form = null)
      form.resetForm(); 

      this.formData =  {
        Id:0,
        Nombre: '',
        IdAutor: 0,      
        IdCategoria: 0,
        Isnb:''
      } 
  
  }

  editCampos(item: any){
    this.formData =  {
      Id: item.id,
      Nombre: item.nombr,
      IdAutor: item.idAutor,      
      IdCategoria: item.idCategoria,
      Isnb: item.isnb
    }; 
  }

  getCategorias(){
    this.serviceCategoria.getCategorias().subscribe((data: any) => {
      this.categorias = data;        
    });
  }

  getAutores(){
    this.serviceAutor.getAutores().subscribe((data: any) => {      
      this.autores = data;        
    });
  }

  getLibros(item?: any){
    this.serviceLibro.getLibros(item).subscribe((data: any) => {      
      this.libros = data;        
    });
  }

  GuardarLibro(libro: Libro) {
    if (libro.Id  != 0) {
      this.serviceLibro.putLibro(libro).subscribe(res=> {
        if(res){
          alert('Registro Actualizado');
          this.getAutores();
        }
      })
    } else {
      this.serviceLibro.postLibro(libro).subscribe(res=> {
        alert('Registro Guardardo');
        this.getAutores();
        
      });
    }

    this.resetForm();
    
  }

  DelCategoria(id: number){
    this.serviceLibro.delLibro(id).subscribe((res: any )=> {
      if(!res.success){
        alert(res.mensaje);
      }else {
        alert('Registro Eliminado');
        this.getAutores();
      }
     
    })
  }

}
