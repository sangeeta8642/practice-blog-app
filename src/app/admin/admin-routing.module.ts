import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdatePostComponent } from './create-update-post/create-update-post.component';
import { PostsComponent } from './posts/posts.component';
import { AuthService } from '../services/auth.service';

const authService: AuthService = inject(AuthService)

console.log("role", authService.isAdmin());


const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'create/post', component: CreateUpdatePostComponent, canActivate: [() => authService.isAdmin()] },
  { path: 'update/post', component: CreateUpdatePostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
