import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Configuración del locale de la app
import localeEsCU from '@angular/common/locales/es-CU';
import localeFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';


registerLocaleData( localeEsCU );
registerLocaleData( localeFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CU' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
