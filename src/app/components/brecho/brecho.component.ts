import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';
import { BrechoService } from 'src/app/services/brecho.service';


@Component({
  selector: 'app-brecho',
  standalone: true,
  imports: [],
  templateUrl: './brecho.component.html',
  styleUrl: './brecho.component.scss'
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

  public buscarPaises(): void {
    this._paisService.listar().subscribe(resp => {
      this.paises = resp;
    });
  }

  public listar(): void {
    this._brechoService.listar().subscribe(resp => {
      this.brecho = resp;
    })
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
        this.brecho = this._iniciarBrecho();
        alert('Cadastrado!');
      });
    }
  }

  public editar(brecho: any): void {
    this.brechoForm = Object.assign({}, brecho);
  }

  public atualizar() {
    if (
      this.brechoForm.nome !== "" &&
      this.brechoForm.descricao !== "" &&
      this.brechoForm.pais_id !== "" &&
      this.brechoForm.dt_fundacao !== ""
    ) {
      this._brechoService.atualizar(this.brechoForm, this.brechoForm.id).subscribe(resp => {
        alert('Ataulizado!');
        this.brecho = this._iniciarBrecho();
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
      id: null,
      nome: '',
      descricao: '',
      dt_fundacao: '',
      pais_id: ''
    }
  }

}
