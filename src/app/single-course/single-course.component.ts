import { Component, OnInit } from '@angular/core';
import { Course } from '../core/models/course.models';
import { CourseService } from '../core/services/course.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.scss']
})
export class SingleCourseComponent implements OnInit{

  course$!: Observable<Course>;

  constructor(private courseSevice: CourseService, private route:ActivatedRoute){}

  ngOnInit(): void {
    const courseNumber:number = +this.route.snapshot.params['c_number'];
    this.course$ = this.courseSevice.findCourseByNumber(courseNumber).pipe();
  }


}
