import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyPortalHeaderComponent } from './components/header/study-portal-header/study-portal-header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudyPortalHeaderComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    StudyPortalHeaderComponent
  ]
})
export class CoreModule { }
