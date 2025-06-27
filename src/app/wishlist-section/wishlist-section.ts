import { Component, inject } from '@angular/core';
import { Wishlist } from '../store/wishlist';

@Component({
  selector: 'app-wishlist-section',
  imports: [],
  templateUrl: './wishlist-section.html',
  styleUrl: './wishlist-section.scss'
})
export class WishlistSection {
wishlist =inject(Wishlist)
}
