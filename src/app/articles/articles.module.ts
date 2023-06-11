import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article/article.component';



@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ArticleComponent
  ]
})
export class ArticlesModule { }
