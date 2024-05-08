import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { BrechoService } from '../../services/brecho.service';

@Component({
  selector: 'app-brecho',
  templateUrl: './brecho.component.html',
  styleUrls: ['./brecho.component.scss']
})
export class BrechoComponent implements OnInit {
  paises: any = [];
  brecho: any = [];
  brechoForm: any = { id: null, nome: '', dt_fundacao: '', pais_id: '', descricao: '' };
  dataAgendamento: Date; // Adicionando propriedade para armazenar a data de agendamento
  quantidadeReservada: number; // Adicionando propriedade para armazenar a quantidade reservada

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
    if (this.brechoForm.nome && this.brechoForm.dt_fundacao && this.brechoForm.pais_id && this.brechoForm.descricao) {
      const pedidoCompra = {
        // Adicione a lógica para criar o pedido de compra com agendamento de data e quantidade reservada
        // Aqui você pode usar this.dataAgendamento e this.quantidadeReservada para obter os valores inseridos pelo usuário
      };
      this._brechoService.criar(pedidoCompra).subscribe(() => {
        this.listar();
        this.brechoForm = { id: null, nome: '', dt_fundacao: '', pais_id: '', descricao: '' };
        this.dataAgendamento = null;
        this.quantidadeReservada = null;
      });
    }
  }

  public editar(item: any): void {
    this.brechoForm = item;
  }

  public atualizar(): void {
    if (this.brechoForm.nome && this.brechoForm.dt_fundacao && this.brechoForm.pais_id && this.brechoForm.descricao) {
      this._brechoService.atualizar(this.brechoForm.id, this.brechoForm).subscribe(() => {
        this.listar();
        this.brechoForm = { id: null, nome: '', dt_fundacao: '', pais_id: '', descricao: '' };
      });
    }
  }

  public cancelar(): void {
    this.brechoForm = { id: null, nome: '', dt_fundacao: '', pais_id: '', descricao: '' };
  }

  public excluir(id: any): void {
    this._brechoService.excluir(id).subscribe(() => {
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
