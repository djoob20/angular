import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.services';

@Component({
  selector: 'app-study-portal-header',
  templateUrl: './study-portal-header.component.html',
  styleUrls: ['./study-portal-header.component.scss']
})
export class StudyPortalHeaderComponent implements OnInit{

  c_number: number = 1;

  constructor(private courseService: CourseService){

  }

  ngOnInit(): void {
    this.courseService.courseSub.subscribe(value =>{
      console.log('Header c_number: ' + value.c_number)
      this.c_number = value.c_number;
    })
  }

}
