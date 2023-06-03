import { Course } from "../models/course.models";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class CourseService{

  courses:Course[] = [
    {
      id: 1,
      title: 'Cours_1',
      description: 'Cours_1 sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 2,
      title: 'Cours_2',
      description: 'Cours_2 sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 3,
      title: 'Cours_3',
      description: 'Cours_3 sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 4,
      title: 'Cours_4',
      description: 'cours sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 5,
      title: 'Cours_5',
      description: 'cours sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 6,
      title: 'Cours_6',
      description: 'cours sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 7,
      title: 'Cours_7',
      description: 'cours sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 8,
      title: 'Cours_8',
      description: 'cours sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 9,
      title: 'Cours_9',
      description: 'cours sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 10,
      title: 'Cours_10',
      description: 'cours sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 11,
      title: 'Cours_11',
      description: 'cours sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 12,
      title: 'Cours_12',
      description: 'cours sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 13,
      title: 'Cours_13',
      description: 'cours sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 14,
      title: 'Cours_14',
      description: 'cours sur quelque chose',
      createdDate: new Date(),
      views: 0
    },
    {
      id: 15,
      title: 'Cours_15',
      description: 'cours sur quelque chose',
      createdDate: new Date(),
      views: 0
    }
  ];

  getAllCourses(): Course[]{
    console.log('SERVICE: ' + this.courses);
    return this.courses;
  }

  getFindCourseById(courseId: number): Course{
    const course = this.courses.find(course => course.id === courseId);
    if (!course){
      throw new Error("FaceSnap not found!");
    }else{
      return course;
    }
  }
}
