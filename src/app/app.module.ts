import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { PublicationComponent } from './publication/publication.component';
import { BlogComponent } from './blog/blog.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SingleCourseComponent } from './single-course/single-course.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    PublicationComponent,
    BlogComponent,
    LandingPageComponent,
    SingleCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
