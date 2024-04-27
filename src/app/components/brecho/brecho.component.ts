import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { BrechoService } from '../../services/brecho.service';

@Component({
  selector: 'app-brecho',
  templateUrl: './brecho.component.html',
  styleUrls: ['./brecho.component.scss']
})
export class BrechoComponent implements OnInit {

  public paises: any = []; // Lista de países
  public brecho: any = []; // Lista de brechós
  public brechoForm: any = this._iniciarBrecho(); // Objeto para o formulário de brechó

  constructor(
    private _paisService: PaisService,
    private _brechoService: BrechoService
  ) { }

  ngOnInit(): void {
    this.buscarPaises(); // Inicializa a lista de países
    this.listar(); // Lista os brechós existentes
  }

  // Interface para a resposta do serviço de países
  interface PaisResponse {
    // Propriedades da resposta do serviço de listar países
  }
  
  // Interface para a resposta do serviço de brechós
  interface BrechoResponse {
    // Propriedades da resposta do serviço de listar brechós
  }

  // Método para buscar a lista de países
  public buscarPaises(): void {
    this._paisService.listar().subscribe((data: PaisResponse) => {
      this.paises = data; // Atribui os países obtidos ao array paises
    });
  }
  
  // Método para listar os brechós
  public listar(): void {
    this._brechoService.listar().subscribe((data: BrechoResponse) => {
      this.brecho = data; // Atribui os brechós obtidos ao array brecho
    });
  }

  // Método para criar um novo brechó
  public criar(): void {
    if (
      this.brechoForm.nome !== "" &&
      this.brechoForm.descricao !== "" &&
      this.brechoForm.pais_id !== "" &&
      this.brechoForm.dt_fundacao !== ""
    ) {
      this._brechoService.criar(this.brechoForm).subscribe(resp => {
        this.listar(); // Atualiza a lista de brechós após a criação
        this.brechoForm = this._iniciarBrecho(); // Reinicia o formulário
        alert('Cadastrado!');
      });
    }
  }

  // Método para editar um brechó
  public editar(brechoItem): void {
    this.brechoForm = Object.assign({}, brechoItem); // Copia os dados do brechó para o formulário de edição
  }

  // Método para atualizar um brechó
  public atualizar(): void {
    if (
      this.brechoForm.nome !== "" &&
      this.brechoForm.descricao !== "" &&
      this.brechoForm.pais_id !== "" &&
      this.brechoForm.dt_fundacao !== ""
    ) {
      this._brechoService.atualizar(this.brechoForm, this.brechoForm.id).subscribe(resp => {
        alert('Atualizado!');
        this.listar(); // Atualiza a lista de brechós após a atualização
        this.brechoForm = this._iniciarBrecho(); // Reinicia o formulário
      });
    }
  }

  // Método para cancelar a edição ou criação de um brechó
  public cancelar(): void {
    this.brechoForm = this._iniciarBrecho(); // Reinicia o formulário
  }

  // Método para excluir um brechó
  public excluir(id: number): void {
    this._brechoService.excluir(id).subscribe(resp => {
      alert('Excluído!');
      this.listar(); // Atualiza a lista de brechós após a exclusão
    });
  }

  // Método privado para inicializar o objeto brechoForm com valores padrão
  private _iniciarBrecho() {
    return {
      id: null,
      nome: '',
      descricao: '',
      dt_fundacao: '',
      pais_id: ''
    };
  }
}
