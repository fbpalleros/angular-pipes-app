import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


//Configuración del locale de la app
import '@angular/common/locales/global/es';
import '@angular/common/locales/global/fr';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-AR' //ESTO ES PARA LOS PIPES
    },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
