import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments';

@Injectable({
  providedIn: 'root'
})
export class BrechoService {

  constructor(private http: HttpClient) { }

  // Método para listar todos os brechós
  public listar() {
    return this.http.get(environment.url_api + 'brecho');
  }

  // Método para criar um novo brechó
  public criar(brecho: any) {
    return this.http.post(environment.url_api + 'brecho', brecho);
  }

  // Método para buscar um brechó por ID
  public listarPorId(id: number) {
    return this.http.get(environment.url_api + 'brecho/' + id);
  }

  // Método para atualizar um brechó existente
  public atualizar(brecho: any, id: number) {
    return this.http.put(environment.url_api + 'brecho/' + id, brecho);
  }

  // Método para excluir um brechó
  public excluir(id: number) {
    return this.http.delete(environment.url_api + 'brecho/' + id);
  }

}
