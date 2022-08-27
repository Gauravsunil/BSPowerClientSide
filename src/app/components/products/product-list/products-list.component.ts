import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
})
export class ProductListComponent implements OnInit {
  title = 'ClientSide';
  constructor(private productService: ProductService){}


  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      console.log(data);
    })
  }
}
