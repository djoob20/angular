import { Component, Input } from '@angular/core';
import { Course } from '../models/course.models';
import { CourseService } from '../services/course.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  @Input() course!: Course;

  constructor(private courseSevice: CourseService, private router: Router){}

  onDetail() {
    this.router.navigateByUrl(`cours/${this.course.id}`);
  }

}
