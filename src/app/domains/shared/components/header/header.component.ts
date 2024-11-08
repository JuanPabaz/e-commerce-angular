import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartproductComponent } from '../../../products/components/cartproduct/cartproduct.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartproductComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideCart = signal(true);
  @Input({required: true}) cartProducts: Product[] = [];
  totalPrice = signal(0);

  ngOnChanges(changes: SimpleChanges){
    const duration = changes['cartProducts'];
    if(duration && duration.currentValue.length !== duration.previousValue.length){
      this.getTotalPrice();
    }
  }

  toggleSideCart(){
    this.hideSideCart.update(prevState => !prevState);
  }

  getTotalPrice(){
    this.totalPrice.update(() => this.cartProducts.reduce((acc, product) => acc + product.price, 0)); 
  }
}
