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

  public criar(pais: any) {
    return this.http.post(environment.url_api + 'brecho', pais);
  }

  public listarPorId(id: number) {
    return this.http.get(environment.url_api + 'brecho/' + id);
  }

  public atualizar(pais: any, id: number) {
    return this.http.put(environment.url_api + 'brecho/' + id, pais);
  }

  public excluir(id: number) {
    return this.http.delete(environment.url_api + 'brecho/' + id);
  }

}
