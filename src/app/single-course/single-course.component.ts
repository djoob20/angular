import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.models';
import { CourseService } from '../services/course.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.scss']
})
export class SingleCourseComponent implements OnInit{

  course!: Course;

  constructor(private courseSevice: CourseService, private route:ActivatedRoute){}

  ngOnInit(): void {
    const courseId:number = +this.route.snapshot.params['id'];
    this.course = this.courseSevice.getFindCourseById(courseId);
  }


}
