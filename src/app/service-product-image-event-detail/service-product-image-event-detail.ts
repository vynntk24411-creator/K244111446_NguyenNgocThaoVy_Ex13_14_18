import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductImage } from '../classes/IProductImage';
import { ProductImageService } from '../services/product-image-service';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  templateUrl: './service-product-image-event-detail.html',
  styleUrls: ['./service-product-image-event-detail.css'],
})
export class ServiceProductImageEventDetail implements OnInit {
  selectedProduct: ProductImage | undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: ProductImageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id != null) {
        this.selectedProduct = this._fs.getProductDetail(id);
      }
    });
  }

  goBack() {
    this.router.navigate(['service-product-image-event']);
  }
}