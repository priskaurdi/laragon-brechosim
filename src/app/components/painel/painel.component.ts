import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { BrechoService } from '../../services/brecho.service';
import { ClienteService } from '../../services/cliente.service'; // Import ClienteService

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  public nuPaises: number = 0; // Variável para armazenar o número total de países
  public nuBrechos: number = 0; // Variável para armazenar o número total de brechós
  public nuClientes: number = 0; // Variável para armazenar o número total de clientes

  constructor(
    private _paisService: PaisService,
    private _brechoService: BrechoService,
    private _clienteService: ClienteService // Injeta ClienteService
  ) {}

  ngOnInit(): void {
    // Chamada para listar os países e atualizar o número total de países
    this._paisService.listar().subscribe(resp => {
      this.nuPaises = Object.values(resp).length;
    }, err => {
      console.error('Ocorreu um erro ao buscar a lista de paises:', err);
    });
    

    // Chamada para listar os brechós e atualizar o número total de brechós
    this._brechoService.listar().subscribe(resp => {
      this.nuBrechos = Object.values(resp).length;
    }, err => {
      console.error('Ocorreu um erro ao buscar a lista de brechos:', err);
    });

    // Chamada para listar os clientes e atualizar o número total de clientes
    this._clienteService.listar().subscribe(resp => {
      this.nuClientes = Object.values(resp).length;
    }, err => {
      console.error('Ocorreu um erro ao buscar a lista de clientes:', err);
    });
  }
}
