import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from './card/card.component';
import { SectionComponent } from './section/section.component';
import { PostComponent } from './post/post.component';
// import { HeaderComponent } from '../../components/header/header.component';
// import { FooterComponent } from '../../components/footer/footer.component';


@NgModule({
  declarations: [
    CardComponent,
    SectionComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports: [
    CardComponent
  ]
})
export class HomeModule { }
