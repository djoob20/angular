import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { httpInterceptorProvides } from './interceptors';
import { HeaderComponent } from './components/header/header.component';
import * as fr from '@angular/common/locales/fr'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue: 'fr-FR'},
     httpInterceptorProvides
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule {
  constructor(){
    registerLocaleData(fr.default)
  }
}
