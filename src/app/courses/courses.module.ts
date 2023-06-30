import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { RouterModule } from '@angular/router';
import { BlogsModule } from "../blogs/blogs.module";
import { BlogComponent } from '../blogs/components/blog/blog.component';



@NgModule({
    declarations: [
        CourseComponent,
        CourseListComponent
    ],
    exports: [
        CourseComponent,
        CourseListComponent,
        BlogComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BlogsModule
    ]
})
export class CoursesModule { }
