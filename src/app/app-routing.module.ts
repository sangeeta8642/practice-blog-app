import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAdmin, isAuthenticate, Unauthenticated } from './auth/auth.guard';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { UnAuthComponent } from './pages/un-auth/un-auth.component';

// CHANGING PAGES WITH ROUTING
// AUTHENTICATION & ROUTE PROTECTION IN ANGULAR APPS
const routes: Routes = [
  { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'view-post', component: ViewPostComponent },
  { path: 'un-auth', component: UnAuthComponent, canActivate: [Unauthenticated] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule), canActivate: [isAdmin] },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule) },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
