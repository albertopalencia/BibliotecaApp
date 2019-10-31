import { Libro } from './../shared/libro.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE' 
    })
};

  constructor(private http: HttpClient) { }


   getLibros(libro: Libro){
  
      let parametros = 'Libro/ListarLibros?Nombre=' + libro.Nombre + '&IdAutor=' + libro.IdAutor + '&IdCategoria=' + libro.IdCategoria;
      return this.http.get(environment.apiURL + parametros,this.httpOptions).pipe(
        map(this.extractData));
     
   
   }

   postLibro(libro: Libro){
    return this.http.post(environment.apiURL + 'Libro/PostLibro',libro).pipe(
      map(this.extractData));
   }

   putLibro(libro: Libro){
    return this.http.put(environment.apiURL + 'Libro/PutLibro',libro).pipe(
      map(this.extractData));
   }

   delLibro(Id: number){
    return this.http.delete(environment.apiURL + 'Libro/DeleteLibro?Id=' + Id).pipe(
      map(this.extractData));
   }

   private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
