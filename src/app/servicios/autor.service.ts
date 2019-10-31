import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Autor } from '../shared/autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }


   getAutores(){
    return this.http.get(environment.apiURL + 'Autor/ListarAutores').pipe(
      map(this.extractData));
   }

   postAutor(Autor: Autor){
    return this.http.post(environment.apiURL + 'Autor/PostAutor',Autor).pipe(
      map(this.extractData));
   }

   putAutor(Autor: Autor){
    return this.http.put(environment.apiURL + 'Autor/PutAutor',Autor).pipe(
      map(this.extractData));
   }

   delAutor(Id: number){
    return this.http.delete(environment.apiURL + 'Autor/DeleteAutor?Id=' + Id).pipe(
      map(this.extractData));
   }



   private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
