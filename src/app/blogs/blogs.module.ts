import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BlogComponent
  ]
})
export class BlogsModule { }
