import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit {

  public paises: any[] = [];
  public pais: any = this._iniciarPais();

  constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
    this.listar();
  }

  // Método para listar os países
  public listar(): void {
    this._paisService.listar().subscribe(resp => {
      this.paises = resp;
    });
  }

  // Método para salvar ou atualizar um país
  public salvar(): void {
    if (this.pais.nome !== "") {
      if (this.pais.id) { // Verifica se o país possui ID (edição)
        this._paisService.atualizar(this.pais, this.pais.id).subscribe(resp => {
          alert('Atualizado!');
          this.listar();
          this.pais = this._iniciarPais(); // Limpa o objeto pais
        });
      } else { // Novo país
        this._paisService.criar(this.pais).subscribe(resp => {
          alert('Cadastrado!');
          this.listar();
          this.pais = this._iniciarPais(); // Limpa o objeto pais
        });
      }
    }
  }

  // Método para iniciar um novo objeto pais
  private _iniciarPais(): any {
    return {
      id: null,
      nome: "",
      capital: ""
    };
  }

  // Método para editar um país
  public editar(pais: any): void {
    this.pais = pais;
    // Display form in edit mode with pre-populated data
  }

  // Método para excluir um país
  public excluir(paisId: number): void {
    this._paisService.excluir(paisId).subscribe(resp => {
      this.paises = this.paises.filter(p => p.id !== paisId);
      alert('País excluído!');
    });
  }
}
