import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
// import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from './card/card.component';
import { SectionComponent } from './section/section.component';
// import { FooterComponent } from '../../components/footer/footer.component';


@NgModule({
  declarations: [
    // HeaderComponent,
    CardComponent,
    SectionComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    CardComponent
  ]
})
export class HomeModule { }
