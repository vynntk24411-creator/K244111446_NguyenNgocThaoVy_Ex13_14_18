import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductImage } from '../classes/IProductImage';
import { ProductImageService } from '../services/product-image-service';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  templateUrl: './service-product-image-event.html',
  styleUrls: ['./service-product-image-event.css'],
})
export class ServiceProductImageEvent implements OnInit {
  products: ProductImage[] = [];

  constructor(private pservice: ProductImageService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.pservice.getProductsWithImages();
  }

  viewDetail(p: ProductImage) {
    this.router.navigate(['service-product-image-event', p.ProductId]);
  }
}