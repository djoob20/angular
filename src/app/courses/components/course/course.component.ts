import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/core/models/course.models';
import { CourseService } from 'src/app/core/services/course.services';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  @Input() course!: Course;
  course$!: Observable<Course>;

  constructor(private router: Router, private courseService: CourseService){}

  onDetail() {
    const courseTitle = this.filterTitle(this.course.title);
    this.router.navigateByUrl(`cours/${courseTitle}`);
    this.course$ = this.courseService.findCourseByNumber(this.course.c_number)
    this.courseService.courseSub.next(this.course);
  }

  filterTitle(title: string): string{
    const pattern = / /gi
    const re = '-';
    let courseTitle = title;
    courseTitle = courseTitle.replace(pattern, re);
    for(let i = courseTitle.length; i > 0; i --){
      if(courseTitle.endsWith(re)){
        courseTitle = courseTitle.substring(0, courseTitle.length - 1);
      }
    }
    return courseTitle;

  }

}
