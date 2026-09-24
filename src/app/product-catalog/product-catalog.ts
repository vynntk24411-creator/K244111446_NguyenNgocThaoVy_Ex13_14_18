import { Component, OnInit } from '@angular/core';
import { Catalog } from '../classes/ICatalog';
import { CatalogService } from '../services/catalog-service';

@Component({
  selector: 'app-product-catalog',
  standalone: false,
  templateUrl: './product-catalog.html',
  styleUrl: './product-catalog.css',
})
export class ProductCatalog implements OnInit {
  categories: Catalog[] = [];

  constructor(private _service: CatalogService) {}

  ngOnInit(): void {
    this.categories = this._service.getCategories();
  }
}