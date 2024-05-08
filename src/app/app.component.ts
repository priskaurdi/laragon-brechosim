import { Component } from '@angular/core';



@Component({
  // 'selector' define o seletor CSS que identifica este componente no template HTML
  selector: 'app-root',

  // 'templateUrl' especifica o URL do arquivo HTML que contém o template do componente
  templateUrl: './app.component.html',

  // 'styleUrls' especifica o URL do arquivo SCSS que contém os estilos do componente
  styleUrls: ['./app.component.scss'],

  standalone: true
})
export class AppComponent {
  // 'title' é uma propriedade do componente usada no template para exibir o título
  title = 'BrechoSim';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Lista de produtos
  products: Product[] = [
    { id: 1, name: 'Produto 1', price: 100, quantity: 1 },
    // Adicione mais produtos conforme necessário
  ];

  // Carrinho de compras
  cart: Product[] = [];

  // Adicionar produto ao carrinho
  addToCart(product: Product) {
    this.cart.push(product);
  }

  // Remover produto do carrinho
  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  // Calcular o total do carrinho
  calculateTotal(): number {
    return this.cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  // Finalizar compra
  checkout() {
    // Implementar a lógica de checkout, como enviar pedido para o servidor, etc.
    console.log("Pedido enviado!");
    // Limpar carrinho após o checkout
    this.cart = [];
  }
}

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
