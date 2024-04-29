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
        this
