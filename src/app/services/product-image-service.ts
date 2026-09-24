import { Service } from '@angular/core';
import { ProductImage } from '../classes/IProductImage';

@Service()
export class ProductImageService {
     productsImage: ProductImage[] = [
    { ProductId: 'p1', ProductName: 'Coca',  Price: 100, Image: 'https://www.coca-cola.com/content/dam/onexp/vn/vi/brands/coca-cola/vn-coca-cola.png' },
    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'https://sinbadsupermarket.com/cdn/shop/files/PEPSISOFTDRINK250ML.jpg?v=1776803177&width=480' },
    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'https://product.hstatic.net/200000078749/product/uoc_tang_luc_sting_dau_lon_330ml_copy_5f2eaa94e75c42c392d39d0286f244fa_0c55b2e03d01492eb7d195cb69da7ebd.jpg' },
  ];

  constructor() {}

  getProductsWithImages(): ProductImage[] {
    return this.productsImage;
  }

  getProductDetail(id: any): ProductImage | undefined {
    return this.productsImage.find((x) => x.ProductId == id);
  }
}
