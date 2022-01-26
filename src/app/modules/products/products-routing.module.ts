import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ItemsComponent } from './items/items.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
    children: [
      {
        path: '',
        component: LinksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
