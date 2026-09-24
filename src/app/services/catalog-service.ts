import { Injectable } from '@angular/core';
import { Catalog } from '../classes/ICatalog';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  datas: Catalog[] = [
    {
      Cateid: 'cate1',
      CateName: 'nuoc ngot',
      Products: [
        { ProductId: 'p1', ProductName: 'Coca',  Price: 100, Image: 'https://png.pngtree.com/png-clipart/20231116/original/pngtree-coca-cola-bottled-drink-isolated-photo-png-image_13575918.png' },
        { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQBIxIYvUNDgQoFz9kSPD7NIF39GJHrTni6jUstI1ew&s=10' },
        { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'https://cdn.go-vietnam.vn/sale-products/01009351-1.png?v=13' },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Bia',
      Products: [
        { ProductId: 'p4', ProductName: 'Heineken', Price: 500, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujaPpST2uFyPCk5qUG_GP9xBTGOabUilxzLLo58nbAQ&s=10' },
        { ProductId: 'p5', ProductName: '333',      Price: 400, Image: 'https://cdn.hstatic.net/products/200001034124/0002104_bia-333-lon-330ml_d0ecda3d56b14959addd47aec5b5ba5e.png' },
        { ProductId: 'p6', ProductName: 'Sai Gon',  Price: 600, Image: 'https://quancathaibinh.vn/uploads/products/11112.png' },
      ],
    },
  ];

  constructor() {}

  getCategories(): Catalog[] {
    return this.datas;
  }
}