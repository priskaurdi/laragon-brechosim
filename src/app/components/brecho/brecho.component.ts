import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { BrechoService } from '../../services/brecho.service';

@Component({
  selector: 'app-brecho',
  templateUrl: './brecho.component.html',
  styleUrls: ['./brecho.component.scss']
})
export class BrechoComponent implements OnInit {

  public paises: any = [];
  public brecho: any = [];
  public brechoForm: any = { ...this._iniciarBrecho(), produto: this._iniciarProduto(), clientes: this._iniciarCliente() };

  constructor(
    private _paisService: PaisService,
    private _brechoService: BrechoService
  ) { }

  ngOnInit(): void {
    this.buscarPaises();
    this.listar();
  }

  public buscarPaises(): void {
    this._paisService.listar().subscribe(resp => {
      this.paises = resp;
    });
  }

  public listar(): void {
    this._brechoService.listar().subscribe(resp => {
      this.brecho = resp;
    });
  }

  public criar(): void {
    if (
      this.brechoForm.nome !== "" &&
      this.brechoForm.descricao !== "" &&
      this.brechoForm.pais_id !== "" &&
      this.brechoForm.dt_cadastro !== "" &&
      this.brechoForm.produto.cdProduto !== "" &&
      this.brechoForm.produto.nmProduto !== "" &&
      this.brechoForm.clientes.cdCliente !== "" &&
      this.brechoForm.clientes.nmCliente !== ""
    ) {
      this._brechoService.criar(this.brechoForm).subscribe(resp => {
        this.listar();
        this.brechoForm = this._iniciarBrecho();
        alert('Cadastrado!');
      });
    }
  }

  public editar(brecho: any): void {
    this.brechoForm = Object.assign({}, brecho);
  }

  public atualizar(): void {
    if (
      this.brechoForm.nome !== "" &&
      this.brechoForm.descricao !== "" &&
      this.brechoForm.pais_id !== "" &&
      this.brechoForm.dt_fundacao !== "" &&
      this.brechoForm.produto.cdProduto !== "" &&
      this.brechoForm.produto.nmProduto !== "" &&
      this.brechoForm.clientes.cdCliente !== "" &&
      this.brechoForm.clientes.nmCliente !== ""
    ) {
      this._brechoService.atualizar(this.brechoForm, this.brechoForm.id).subscribe(resp => {
        alert('Atualizado!');
        this.brechoForm = this._iniciarBrecho();
        this.listar();
      });
    }
  }

  public cancelar(): void {
    this.brechoForm = this._iniciarBrecho();
  }

  public excluir(id: number): void {
    this._brechoService.excluir(id).subscribe(resp => {
      alert('Excluído!');
      this.listar();
    });
  }

  private _iniciarBrecho() {
    return {
      cdPedido: null,
      cdProduto: '',
      cdCliente: '',
      dtAgendamento: '',
      dtContato: '',
      qtProduto: null
    };
  }

  private _iniciarProduto() {
    return {
      cdProduto: '',
      nmProduto: '',
      cdFornecedor: '',
      nmFornecedor: '',
      cdCategoria: '',
      nmCategoria: '',
      cdUnidade: '',
      dsUnidade: '',
      vlUnidade: null,
      idFotoProduto: null
    };
  }

  private _iniciarCliente() {
    return {
      cdCliente: '',
      nmCliente: '',
      cpf: '',
      celular: '',
      endereco: {
        numero: '',
        compEnd: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: ''
      }
    };
  }
}
