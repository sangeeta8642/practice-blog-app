import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { isAuthenticate } from '../auth/auth.guard';

// CHANGING PAGES WITH ROUTING
// AUTHENTICATION & ROUTE PROTECTION IN ANGULAR APPS
const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate: [isAuthenticate] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
