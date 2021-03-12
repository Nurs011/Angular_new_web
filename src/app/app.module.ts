import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { KidsPageComponent } from './kids-page/kids-page.component';
import { MenPageComponent } from './men-page/men-page.component';
import { WomenPageComponent } from './women-page/women-page.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {MycustompipePipe} from './Pipes/my.pipe';
import {ProductService} from './services/product.service';
import {LoggingService} from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    KidsPageComponent,
    MenPageComponent,
    WomenPageComponent,
    FooterComponent,
    MycustompipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [LoggingService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
