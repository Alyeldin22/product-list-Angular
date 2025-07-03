import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage: number): number {
    if (!discountPercentage || discountPercentage <= 0) {
      return price;
    }
    return price - (price * discountPercentage / 100);
  }
} 