import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  public listar() {
    return this.http.get(environment.url_api + 'paises');
  }

  public criar(país: any) { // Corrigido o parâmetro para 'país'
    return this.http.post(environment.url_api + 'paises', país); // Corrigido o parâmetro para 'país'
  }

  public listarPorId(id: number) {
    return this.http.get(environment.url_api + 'paises/' + id);
  }

  public atualizar(país: any, id: number) { // Corrigido o parâmetro para 'país'
    return this.http.put(environment.url_api + 'paises/' + id, país); // Corrigido o parâmetro para 'país'
  }

  public excluir(id: number) {
    return this.http.delete(environment.url_api + 'paises/' + id);
  }

}
