import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais', // Seletor do componente
  templateUrl: './pais.component.html', // URL do template HTML do componente
  styleUrls: ['./pais.component.scss'] // URLs dos estilos SCSS do componente
})
export class PaisComponent implements OnInit {

  public paises: any = []; // Array para armazenar os países
  public pais: any = this._iniciarPais(); // Objeto para armazenar os dados do país em edição ou criação

  constructor(private _paisService: PaisService) { } // Injeta o serviço de países

  ngOnInit(): void {
    this.listar(); // Ao iniciar o componente, lista os países
  }

  // Método para listar os países
  public listar(): void {
    this._paisService.listar().subscribe(resp => {
      this.paises = resp; // Atualiza o array de países com a resposta do serviço
    });
  }

  // Método para salvar um país
  public salvar(): void {
    if (this.pais.nome !== "") { // Verifica se o nome do país não está vazio
      this._paisService.criar(this.pais).subscribe(resp => {
        alert('Cadastrado!'); // Exibe um alerta de sucesso
        this.listar(); // Atualiza a lista de países
        this.pais = this._iniciarPais(); // Reinicia o objeto de país
      });
    }
  }

  // Método para editar um país
  public editar(pais: any): void {
    this.pais = Object.assign({}, pais); // Copia os dados do país para o objeto de país em edição
  }

  // Método para atualizar um país
  public atualizar() {
    if (this.pais.nome !== "") { // Verifica se o nome do país não está vazio
      this._paisService.atualizar(this.pais, this.pais.id).subscribe(resp => {
        alert('Atualizado!'); // Exibe um alerta de sucesso
        this.listar(); // Atualiza a lista de países
        this.pais = this._iniciarPais(); // Reinicia o objeto de país
      });
    }
  }

  // Método para cancelar a edição ou criação de um país
  public cancelar(): void {
    this.pais = this._iniciarPais(); // Reinicia o objeto de país
  }

  // Método para excluir um país
  public excluir(id: number): void {
    this._paisService.excluir(id).subscribe(resp => {
      alert('Excluído!'); // Exibe um alerta de sucesso
      this.listar(); // Atualiza a lista de países
    });
  }

  // Método para iniciar um novo objeto de país
  private _iniciarPais() {
    return {
      id: null,
      nome: ''
    };
  }
}
