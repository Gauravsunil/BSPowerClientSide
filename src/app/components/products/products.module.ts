import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.modue';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    ProductsRoutingModule,
    RouterModule
  ],
  providers: [],
})

export class ProductsModule { }
