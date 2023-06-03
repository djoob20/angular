import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudyPortalHeaderComponent } from './study-portal-header/study-portal-header.component';
import { CourseComponent } from './course/course.component';
import { ArticleComponent } from './article/article.component';
import { PublicationComponent } from './publication/publication.component';
import { BlogComponent } from './blog/blog.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { SingleCourseComponent } from './single-course/single-course.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyPortalHeaderComponent,
    CourseComponent,
    ArticleComponent,
    PublicationComponent,
    BlogComponent,
    LandingPageComponent,
    CourseListComponent,
    SingleCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
