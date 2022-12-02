import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UsersComponent } from './users/users.component';


const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "post/attivi",
    component: PostAttiviComponent
  },
  {
    path: "post/inattivi",
    component: PostInattiviComponent
  },
  {
    path: "post/attivi/:id",
    component: PostDetailsComponent
  },
  {
    path: "post/inattivi/:id",
    component: PostDetailsComponent
  },
  {
    path: "users",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
