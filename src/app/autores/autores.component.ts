import { AutorService } from './../servicios/autor.service';
import { Autor } from './../shared/autor.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styles: []
})
export class AutoresComponent implements OnInit {


  formData: Autor;
  autores: Autor[] = [];

  constructor(private service: AutorService) { }

  ngOnInit() {
    this.resetForm();   

    
    this.getAutores();
  }


  resetForm(form?: NgForm){
    if(form = null)
      form.resetForm(); 

      this.formData =  {
        Id: 0,
        Nombre: '',
        Apellidos: '',
        FechaNacimiento : new Date()
      }  

  }

  getAutores(){
    this.service.getAutores().subscribe((data: any) => {
      this.autores = data;        
    });
  }

  editCampos(item: any){
    this.formData =  {
      Id: item.id,
      Nombre: item.nombre,
      Apellidos: item.apellidos,
      FechaNacimiento: new Date(item.fechaNacimiento)
    }; 
  }

  GuardarAutor(autor: Autor){
    if (autor.Id == 0) {
      this.service.postAutor(autor).subscribe(res=> {
        alert('Registro Guardardo');
        this.resetForm();
      });
    } else {
      this.service.putAutor(autor).subscribe(res=> {
        alert('Registro Actualizado');
        this.resetForm();
      });
    }
   
  }
 

  DelAutor(id: number){
    this.service.delAutor(id).subscribe( (res: any)=> {
    
      if(!res.success){
        alert(res.mensaje);
      }else {
        alert('Registro Eliminado');
        this.getAutores();
      }
    })
  }


}
