import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-cartproduct',
  standalone: true,
  imports: [],
  templateUrl: './cartproduct.component.html',
  styleUrl: './cartproduct.component.css'
})
export class CartproductComponent {
  @Input({required:true}) product: Product = {
    id: Date.now(),
    title: '',
    price: 0,
    image: '',
    createdAt: new Date().toISOString()
  };

}
