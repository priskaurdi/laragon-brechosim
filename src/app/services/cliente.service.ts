import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  // Método para listar todos os clientes
  public listar() {
    return this.http.get(environment.url_api + 'cliente');
  }

  // Método para criar um novo cliente
  public criar(cliente: any) {
    return this.http.post(environment.url_api + 'cliente', cliente);
  }

  // Método para buscar um cliente por ID
  public listarPorId(id: number) {
    return this.http.get(environment.url_api + 'cliente/' + id);
  }

  // Método para atualizar um cliente existente
  public atualizar(cliente: any, id: number) {
    return this.http.put(environment.url_api + 'cliente/' + id, cliente);
  }

  // Método para excluir um cliente
  public excluir(id: number) {
    return this.http.delete(environment.url_api + 'cliente/' + id);
  }
}
