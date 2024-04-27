import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) {}

  // Método para listar todos os países
    public listar() {
      return this.http.get(environment.url_api + 'paises');
   }

  // Método para criar um novo país
    public criar(pais: any) {
      return this.http.post(environment.url_api + 'paises', pais);
   }

  // Método para buscar um país por ID
    public listarPorId(id: number) {
      return this.http.get(environment.url_api + 'paises/' + id);
  }

  // Método para atualizar um país existente
    public atualizar(pais: any, id: number) {
      return this.http.put(environment.url_api + 'paises/' + id, pais);
  }

  // Método para excluir um país
    public excluir(id: number) {
      return this.http.delete(environment.url_api + 'paises/' + id);
  }

}
