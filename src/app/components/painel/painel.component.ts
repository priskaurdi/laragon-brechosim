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
  public nuPaises: number = 0;
  public nuBrecho: number = 0;

  constructor(
    private _paisService: PaisService,
    private _brechoService: BrechoService
  ) { }

  ngOnInit(): void {
    this._paisService.listar().pipe(
      map(resp => Object.values(resp).length),
      catchError(err => {
        console.error('Ocorreu um erro ao listar os países', err);
        const error = new Error('Ocorreu um erro ao listar os países');
        return throwError(() => error);
      })
    ).subscribe(nuPaises => {
      this.nuPaises = nuPaises;
    });

    this._brechoService.listar().pipe(
      map(resp => Object.values(resp).length),
      catchError(err => {
        console.error('Ocorreu um erro ao listar os brechós', err);
        const error = new Error('Ocorreu um erro ao listar os brechós');
        return throwError(() => error);
      })
    ).subscribe(nuBrecho => {
      this.nuBrecho = nuBrecho;
    });
  }
}
