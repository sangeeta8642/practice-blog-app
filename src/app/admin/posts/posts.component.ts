import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Allposts } from 'src/app/utils/constants';
import { postInterface } from 'src/app/utils/type.interface';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: postInterface[] = Allposts

  constructor(private router: Router) {

  }


  CreateNew() {
    this.router.navigateByUrl('/admin/create/post')
  }
}
