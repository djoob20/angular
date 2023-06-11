import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CourseComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CourseComponent,
    CourseListComponent
  ]
})
export class CoursesModule { }
