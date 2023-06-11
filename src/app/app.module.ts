import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SingleCourseComponent } from './single-course/single-course.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { BlogsModule } from './blogs/blogs.module';
import { ArticlesModule } from './articles/articles.module';

@NgModule({
  declarations: [
    AppComponent,
    SingleCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoursesModule,
    ArticlesModule,
    BlogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
