import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesService } from './clientes/clientes.service';
import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
