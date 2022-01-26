import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { IntroComponent } from './intro/intro.component';
import { LinksComponent } from './links/links.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    IntroComponent,
    LinksComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    IntroComponent
  ]
})
export class ProductsModule { }
