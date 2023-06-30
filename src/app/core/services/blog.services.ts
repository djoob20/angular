import { Injectable } from "@angular/core";
import { Blog } from "../models/blog.models";

@Injectable({
  providedIn: 'root'
})

export class BlogService{

  blogs:Blog[] = [
    {
      id: 1,
      title: 'Blog 1',
      description: 'blog1 descrioption',
      messages: 'blog1 content',
      createdDate: new Date(),
      creator: 'creator1'
    },
    {
      id: 2,
      title: 'Blog 2',
      description: 'blog2 descrioption',
      messages: 'blog2 content',
      createdDate: new Date(),
      creator: 'creator2'
    },
    {
      id: 3,
      title: 'Blog 3',
      description: 'blog3 descrioption',
      messages: 'blog3 content',
      createdDate: new Date(),
      creator: 'creator3'
    }
  ]

  getAllBlogs(): Blog[]{
    return this.blogs;
  }
}
