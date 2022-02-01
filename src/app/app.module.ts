import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import {HttpClientModule} from '@angular/common/http';
// import {ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { EmailEditorComponent } from './email-editor/email-editor.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
    // EmailEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
