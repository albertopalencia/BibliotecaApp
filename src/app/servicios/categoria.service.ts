import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../shared/categoria.model';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  constructor(private http: HttpClient) { }


   getCategorias(){
    return this.http.get(environment.apiURL + 'Categoria/ListarCategorias').pipe(
      map(this.extractData));
   }

   postCategorias(categoria: Categoria){
    return this.http.post(environment.apiURL + 'Categoria/PostCategoria',categoria).pipe(
      map(this.extractData));
   }

   putCategorias(categoria: Categoria){
    return this.http.put(environment.apiURL + 'Categoria/PutCategoria',categoria).pipe(
      map(this.extractData));
   }

   delCategorias(Id: number){
    return this.http.delete(environment.apiURL + 'Categoria/DeleteCategoria?Id=' + Id).pipe(
      map(this.extractData));
   }



   private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
