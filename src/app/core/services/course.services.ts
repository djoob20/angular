import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { Course } from "../models/course.models";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CourseService{

  SERVER_URL: string = 'http://localhost:9000/courses';

  course!:Course;
  courseNr: number = 1;
  public courseSub!: BehaviorSubject<Course>;
  constructor(private http: HttpClient, private route: ActivatedRoute){

    this.initCourse();
    console.log('SERVICE-------------:')
    console.log('SERVICE-------------:' + this.course.title)
    this.courseSub = new BehaviorSubject<Course>(this.course);

  }

  getAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.SERVER_URL);
  }

  findCourseByNumber(courseNumber: number): Observable<Course>{
    return this.http.get<Course>(`${this.SERVER_URL}/${courseNumber}`);
  }

  initCourse():void{
    this.course = {
      id: 1,
      title: "Introduction au droit",
      description: "Ce cours d'Introduction au droit aborde les spécificités de la matière (contraintes et outils spécifiques) ",
      content: "Même si vous vous situez à l'aube de vos études de droit, vous avez tous une certaine idée, plus ou\nmoins vague, de ce qu’est le droit. Cette idée a sans doute guidé le choix de votre inscription à la faculté de droit.\nPour vous, sans doute, le droit est ce qui ordonne, ce qui interdit. L’idée que vous avez du droit est\nessentiellement liée à la contrainte, à la sanction.",
      views: 11,
      c_number: this.courseNr,
      createdDate: new Date("2001-01-01")
    }
  }
}
