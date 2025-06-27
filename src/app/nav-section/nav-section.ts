import { Component, inject} from '@angular/core';
import { CartHandling } from '../services/cart-handling';
import { CartSection } from "../cart-section/cart-section";
import { RouterModule } from '@angular/router';
import { Login } from "../login/login";
import { Wishlist } from '../store/wishlist';

@Component({
  selector: 'app-nav-section',
  imports: [CartSection, RouterModule, Login],
  templateUrl: './nav-section.html',
  styleUrl: './nav-section.scss'
})
export class NavSection {
  wishlist=inject(Wishlist);
  cartSec= inject(CartHandling)
  cart=this.cartSec.cart
  cartItems = inject(CartHandling).cart;
}

