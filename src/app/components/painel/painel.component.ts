import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { BrechoService } from '../../services/brecho.service';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  public nuPaises: number = 0; // Variável para armazenar o número total de países
  public nuBrecho: number = 0; // Variável para armazenar o número total de brechós

  constructor(
    private _paisService: PaisService,
    private _brechoService: BrechoService
  ) { }

  ngOnInit(): void {
    // Chamada para listar os países e atualizar o número total de países
    this._paisService.listar().pipe(
      map(resp => Object.values(resp).length), // Mapeia a resposta para obter o comprimento do array de países
      catchError(err => { // Captura e trata erros ao listar países
        console.error('Ocorreu um erro ao listar os países', err);
        const error = new Error('Ocorreu um erro ao listar os países');
        return throwError(() => error); // Lança um erro novamente para ser tratado pelo componente que chamou o serviço
      })
    ).subscribe(nuPaises => { // Inscreve-se para receber o número total de países
      this.nuPaises = nuPaises; // Atribui o número total de países à variável nuPaises
    });

    // Chamada para listar os brechós e atualizar o número total de brechós
    this._brechoService.listar().pipe(
      map(resp => Object.values(resp).length), // Mapeia a resposta para obter o comprimento do array de brechós
      catchError(err => { // Captura e trata erros ao listar brechós
        console.error('Ocorreu um erro ao listar os brechós', err);
        const error = new Error('Ocorreu um erro ao listar os brechós');
        return throwError(() => error); // Lança um erro novamente para ser tratado pelo componente que chamou o serviço
      })
    ).subscribe(nuBrecho => { // Inscreve-se para receber o número total de brechós
      this.nuBrecho = nuBrecho; // Atribui o número total de brechós à variável nuBrecho
    });
  }
}
