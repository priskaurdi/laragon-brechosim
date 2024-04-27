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
  public brechoForm: any = this._iniciarBrecho();

  constructor(
    private _paisService: PaisService,
    private _brechoService: BrechoService
  ) { }

  ngOnInit(): void {
    this.buscarPaises();
    this.listar();
  }

  interface PaisResponse {
    // ... properties of the response from pais.service.listar()
  }
  
  interface BrechoResponse {
    // ... properties of the response from brecho.service.listar()
  }

  public buscarPaises(): void {
    this._paisService.listar().subscribe((data: PaisResponse) => {
      this.paises = resp;
    });
  }

  public listar(): void {
    this._brechoService.listar().subscribe((data: BrechoResponse) => {
      this.brecho = resp;
    });
  }

  public criar(): void {
    if (
      this.brechoForm.nome !== "" &&
      this.brechoForm.descricao !== "" &&
      this.brechoForm.pais_id !== "" &&
      this.brechoForm.dt_fundacao !== ""
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
      this.brechoForm.dt_fundacao !== ""
    ) {
      this._brechoService.atualizar(this.brechoForm, this.brechoForm.id).subscribe(resp => {
        alert('Atualizado!');
        this.listar();
        this.brechoForm = this._iniciarBrecho();
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
      id: null,
      nome: '',
      descricao: '',
      dt_fundacao: '',
      pais_id: ''
    };
  }
}
