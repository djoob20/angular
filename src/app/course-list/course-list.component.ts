import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.models';
import { CourseService } from '../services/course.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit{

  courses$!: Observable<Course[]>;

  course!: Course;
  active: string = 'active';
activeCourseNr!: number;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router:Router){

  }

  ngOnInit(): void {
    this.courses$ = this.courseService.getAllCourses();
    this.courseService.courseSub.subscribe(value =>{
      this.course = value;
      this.activeCourseNr = this.course.c_number;
    });

    }



}
