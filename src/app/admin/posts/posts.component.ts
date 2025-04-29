import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';
// import { Allposts } from 'src/app/utils/constants';
import { postInterface } from 'src/app/utils/type.interface';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: postInterface[] = []
  allPosts: postInterface[] = []
  displayedColumns: string[] = ['position', 'symbol', 'name', 'weight', 'actions'];

  constructor(
    private router: Router,
    private postService: PostsService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe((data) => {

      const user = this.authService.getUser()
      if (user) {
        this.posts = data.filter((x) => x.admin === user?.id)
        this.allPosts = data.filter((x) => x.admin === user?.id)
        console.log("posts852", this.posts, user);
      }
    })
  }

  CreateNew() {
    this.router.navigateByUrl('/admin/post')
  }

  updateElemenet(element: postInterface) {
    // this.router.navigateByUrl('/admin/update/post', { state: { element, id: element.id } })
    this.router.navigate(['/admin', 'post'], { queryParams: { id: element.id } })
  }

  viewPost(post: postInterface) {
    this.router.navigateByUrl('/view-post', { state: post })
  }

  deletePost(id: number) {
    // this.router.navigateByUrl('/view-post', { state: post })
    this.postService.deletePost(id).subscribe((data) => {
      alert("post delete successfully")
      this.getAllPosts()
    })


  }
}
