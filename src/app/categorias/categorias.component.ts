import { AlertService } from './../servicios/alert.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../servicios/categoria.service';
import { NgForm } from '@angular/forms';
import { Categoria } from '../shared/categoria.model';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: [],
  providers: [CategoriaService]
})
export class CategoriasComponent implements OnInit {
    
  formData: Categoria;
  categorias: Categoria[] = [];

  constructor(private service: CategoriaService, private alert: AlertService) { }

  ngOnInit() {
    this.resetForm();   
  }


  resetForm(form?: NgForm){
    if(form = null)
      form.resetForm(); 

      this.formData =  {
        Id: 0,
        Nombre: '',
        Descripcion: ''
      }  

      this.getCategorias();

  }

  editCampos(item: any){
    this.formData =  {
      Id: item.id,
      Nombre: item.nombre,
      Descripcion: item.descripcion
    }; 
  }

  getCategorias(){
    this.service.getCategorias().subscribe((data: any) => {
      this.categorias = data;        
    });
  }

  GuardarCategoria(categoria: Categoria){
    if (categoria.Id  != 0) {
      this.service.putCategorias(categoria).subscribe(res=> {
        if(res){
          alert('Registro Actualizado');
          this.getCategorias();
        }
      })
    } else {
      this.service.postCategorias(categoria).subscribe(res=> {
        alert('Registro Guardardo');
        this.getCategorias();
      });
    }
    
  }

  DelCategoria(id: number){
    this.service.delCategorias(id).subscribe((res: any )=> {
      if(!res.success){
        alert(res.mensaje);
      }else {
        alert('Registro Eliminado');
        this.getCategorias();
      }
     
    })
  }
}
