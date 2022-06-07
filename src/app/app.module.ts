import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './layout/aside/aside.component';
import { MainComponent } from './layout/main/main.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GaleriaComponent } from './feature/galeria/galeria.component';
import { RelatoComponent } from './feature/relato/relato.component';
import { PostalesComponent } from './feature/postales/postales.component';


@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    MainComponent,
    ToolbarComponent,
    FooterComponent,
    GaleriaComponent,
    RelatoComponent,
    PostalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
