import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { BrechoService } from '../../services/brecho.service';
import { ClienteService } from '../../services/cliente.service'; // Import ClienteService


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  @Input() product: Product; // Input to receive product data
  @Output() addToCart = new EventEmitter<Product>(); // Output event for adding to cart

  onClickAddToCart() {
    this.addToCart.emit(this.product); // Emit event with product data
  }
  

  constructor(
    private _paisService: PaisService,
    private _brechoService: BrechoService,
    private _clienteService: ClienteService // Injeta ClienteService
  ) { }

  ngOnInit(): void {
    
  }
}
