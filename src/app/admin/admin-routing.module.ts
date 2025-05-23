import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdatePostComponent } from './create-update-post/create-update-post.component';
import { PostsComponent } from './posts/posts.component';

// CHANGING PAGES WITH ROUTING
const routes: Routes = [
  { path: '', component: PostsComponent },
  // { path: 'create/post', component: CreateUpdatePostComponent },
  { path: 'post', component: CreateUpdatePostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
