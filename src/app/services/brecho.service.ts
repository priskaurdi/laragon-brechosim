import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments';

@Injectable({
  providedIn: 'root'
})
export class BrechoService {

  constructor(private http: HttpClient) { }

  public listar() {
    return this.http.get(environment.url_api + 'brecho');
  }

  public criar(brecho: any) { // Corrigido o parâmetro para 'brecho'
    return this.http.post(environment.url_api + 'brecho', brecho); // Corrigido o parâmetro para 'brecho'
  }

  public listarPorId(id: number) {
    return this.http.get(environment.url_api + 'brecho/' + id);
  }

  public atualizar(brecho: any, id: number) { // Corrigido o parâmetro para 'brecho'
    return this.http.put(environment.url_api + 'brecho/' + id, brecho); // Corrigido o parâmetro para 'brecho'
  }

  public excluir(id: number) {
    return this.http.delete(environment.url_api + 'brecho/' + id);
  }

}
