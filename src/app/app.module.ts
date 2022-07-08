import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';

@NgModule({
  declarations: [AppComponent, AnimalCardComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    HeaderModule,
    FooterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
