import { SingleCourseComponent } from './single-course/single-course.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleComponent } from "./articles/components/article/article.component";
import { BlogComponent } from "./blogs/components/blog/blog.component";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";
import { PublicationComponent } from "./publications/components/publication/publication.component";
import { CourseListComponent } from "./courses/components/course-list/course-list.component";

const routes: Routes = [
  {path:'cours/:title', component: CourseListComponent},
  {path:'blog', component: BlogComponent},
  {path:'publications', component: PublicationComponent},
  {path:'articles', component: ArticleComponent},
  {path:'cours', component: CourseListComponent},
  {path:'accueil', component:LandingPageComponent},
  {path:'', component: LandingPageComponent}
]
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{

}
