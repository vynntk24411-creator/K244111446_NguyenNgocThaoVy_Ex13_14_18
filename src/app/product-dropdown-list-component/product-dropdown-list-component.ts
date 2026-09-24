import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-dropdown-list-component',
  standalone: false,
  styleUrl: './product-dropdown-list-component.css',
  templateUrl: './product-dropdown-list-component.html',
})
export class ProductDropdownListComponent {
    products: Product[] = [
      { id: 1, name: 'IP 18 màu đen', price: 999, image:'https://minhtuanmobile.com/uploads/products/260910090831-iphone-18-pro-black-pdp-images-vi-vn.png' },
      { id: 2, name: 'IP 18 màu đỏ', price: 19.99, image:'https://minhtuanmobile.com/uploads/products/iphone-18-pro-512gb-chinh-hang-vn-260910065501.png' },
      { id: 3, name: 'IP 18 màu trắng', price: 5.99, image:'https://minhtuanmobile.com/uploads/products/260910065535-iphone-18-pro-512gb-chinh-hang-vn-2.png' },
    ];
}
