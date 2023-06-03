import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.models';
import { CourseService } from '../services/course.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit{

  courses!: Course[];

  course!: Course;

  constructor(private courseService: CourseService, private route: ActivatedRoute){}

  ngOnInit(): void {
    console.log('CourseListComponent: ' + this.courses)
    this.courses = this.courseService.getAllCourses();


    const courseId:number = +this.route.snapshot.params['id'];
    this.course = this.courseService.getFindCourseById(courseId);
  }

}
