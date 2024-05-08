import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments';
import { Observable } from 'rxjs';

//import { Product } from '../models/product.model';  -- Não existe esse componente


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) {}

  
  // Método para buscar detalhes de produtos das classes ou do banco de dados
  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.apiUrl);
  // }

    // Método para adicionar produto ao pedido (não implementado neste exemplo)
  addToOrder(productId: number): Observable<any> {
    // Implementar lógica para adicionar produto ao pedido
    return this.http.post<any>(`${this.apiUrl}/${productId}/order`, {});
  }

  // Método para atualizar inventário do produto (não implementado neste exemplo)
  updateInventory(productId: number, quantity: number): Observable<any> {
    // Implementar lógica para atualizar inventário do produto
    return this.http.put<any>(`${this.apiUrl}/${productId}/inventory`, { quantity });
  }

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





