import { Component, OnInit } from '@angular/core';
import { Course } from '../../../core/models/course.models';
import { CourseService } from '../../../core/services/course.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/core/models/blog.models';
import { BlogService } from 'src/app/core/services/blog.services';

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

  blogs!:Blog[];

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router:Router, private blogService: BlogService){

  }

  ngOnInit(): void {
    this.courses$ = this.courseService.getAllCourses();
    this.courseService.courseSub.subscribe(value =>{
      this.course = value;
      this.activeCourseNr = this.course.c_number;
    });

    this.blogs = this.blogService.getAllBlogs();

    }



}
