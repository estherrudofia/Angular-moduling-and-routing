import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiscoverRoutingModule } from './discover-routing.module';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DiscoverModule { }
