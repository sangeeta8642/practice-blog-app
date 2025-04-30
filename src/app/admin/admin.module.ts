// 4. MODULE
// 4.1 ADMIN MODULE
// USING ANGULAR MODULES & OPTIMIZING APPS USING SHARED MODULES IN ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { PostsComponent } from './posts/posts.component';
import { CreateUpdatePostComponent } from './create-update-post/create-update-post.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PostsComponent,
    CreateUpdatePostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
