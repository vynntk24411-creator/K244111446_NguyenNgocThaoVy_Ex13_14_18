import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-list-component',
  standalone: false,
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {

  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, image:'https://minhtuanmobile.com/iphone-18-pro-512gb/?gad_source=1&gad_campaignid=24250389550&gbraid=0AAAAACpWbp4SSe1mbwNT0yX5qChLPJdtg&gclid=CjwKCAjwn67VBhBnEiwAXUIN1buiRXVC-6z2A-Q5X4h0VGlVtjXFftHhCdWrKQmuGxDW4GRkfwBYnBoCCFYQAvD_BwE' },
    { id: 2, name: 'Mouse', price: 19.99, image:'https://minhtuanmobile.com/iphone-18-pro-512gb/?proid=31466' },
    { id: 3, name: 'Keyboard', price: 5.99, image:'https://minhtuanmobile.com/iphone-18-pro-512gb/?proid=31819' },
  ];

}
