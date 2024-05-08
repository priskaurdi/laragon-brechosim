import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../models/pais.model'; // Importa o modelo de país

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit {
  paises: Pais[] = []; // Array para armazenar a lista de países
  pais: Pais = this._iniciarPais(); // Objeto para armazenar dados do país

  constructor(private _paisService: PaisService) {}

  ngOnInit(): void {
    this.listar(); // Chama o método para listar os países ao inicializar o componente
  }

  // Método para listar os países
  public listar(): void {
    this._paisService.listar().subscribe(resp => {
      this.paises = resp;
    });
  }

  // Método para salvar ou atualizar um país
  public salvar(): void {
    if (this.pais.nome.trim() !== "") {
      if (this.pais.id) {
        this._paisService.atualizar(this.pais, this.pais.id).subscribe(() => {
          alert('Atualizado!');
          this.listar();
          this.pais = this._iniciarPais();
        });
      } else {
        this._paisService.criar(this.pais).subscribe(() => {
          alert('Cadastrado!');
          this.listar();
          this.pais = this._iniciarPais();
        });
      }
    }
  }

  // Método para editar um país
  public editar(pais: Pais): void {
    this.pais = Object.assign({}, pais);
    // Display form in edit mode with pre-populated data
  }

  // Método para excluir um país
  public excluir(paisId: number): void {
    this._paisService.excluir(paisId).subscribe(resp => {
      alert('País excluído!');
      this.listar();
    });
  }

  public cancelar(): void {
    this.pais = this._iniciarPais(); // Clear the pais object
    // Reset form (if applicable)
  }

  // Método para atualizar um país
  public atualizar(): void {
    if (this.pais.nome !== "") {
      if (this.pais.id) { // Verifica se o país possui ID (edição)
        this._paisService.atualizar(this.pais, this.pais.id).subscribe(resp => {
          alert('Atualizado!');
          this.listar();
          this.pais = this._iniciarPais(); // Limpa o objeto pais
        });
      } else {
        console.error('Erro ao atualizar país: ID não encontrado');
      }
    }
  }

  // Método para iniciar um novo objeto pais
  private _iniciarPais() {
    return {
      id: null,
      nome: "",
      capital: ""
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'; // Importar o serviço ProductService para buscar dados de produtos
import { Product } from '../models/product.model'; // Importar o modelo de dados Product

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  products: Product[] = []; // Lista de produtos

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Chamada para buscar dados de produtos ao inicializar o componente
    this.getProducts();
  }

  // Função para buscar dados de produtos
  getProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  // Função para adicionar produto ao carrinho
  addToCart(product: Product) {
    // Implementar lógica para adicionar produto ao carrinho
  }

  // Função para atualizar quantidade de produto no carrinho
  updateQuantity(product: Product, quantity: number) {
    // Implementar lógica para atualizar quantidade de produto no carrinho
  }
}

