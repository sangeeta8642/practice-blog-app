import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/app.reducer';
import { isAuthenticate } from 'src/app/auth/auth.guard';
import { addToFavorites, removeFromFavorites } from 'src/app/ngrx/user/actions/user.actions';
// import { addToFavorites } from 'src/app/ngrx/user/actions/favorites.actions';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';
// import { addToFavorites } from 'src/app/ngrx/user/actions/user.actions';
import { postInterface, userInterface } from 'src/app/utils/type.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',

  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() posts!: postInterface[];
  @Input() page!: string;
  user: userInterface | null


  constructor(
    private router: Router,
    private store: Store<AppStateModel>,
    private authService: AuthService,
    private postService: PostsService
  ) {
    this.user = this.authService.getUser()
  }

  // getAllPosts() {
  //     this.postService.getAllPosts().subscribe((data) => {

  //       const user = this.authService.getUser()
  //       if (user) {
  //         this.posts = data.filter((x) => x.admin === user?.id)
  //         this.allPosts = data.filter((x) => x.admin === user?.id)
  //         console.log("posts852", this.posts, user);
  //       }
  //     })
  //   }

  viewPost(post: postInterface) {
    this.router.navigateByUrl('/view-post', { state: post })
  }

  updateElemenet(element: postInterface) {
    // this.router.navigateByUrl('/admin/update/post', { state: { element, id: element.id } })
    this.router.navigate(['/admin', 'post'], { queryParams: { id: element.id } })
  }

  deletePost(id?: number) {
    // this.router.navigateByUrl('/view-post', { state: post })
    this.postService.deletePost(id).subscribe((data) => {
      alert("post delete successfully")
      // this.getAllPosts()
    })


  }

  ngOnInit(): void {
    // console.log("");
    console.log("posts", this.posts);

  }

  async addToFvrt(id: number | undefined) {
    if (await this.authService.isAuthenticate()) {
      this.store.dispatch(addToFavorites({ id }))
      alert("article added to favorites")
      this.router.navigateByUrl('/favorites')
    } else {
      alert("Please login to save your favorites articles")
    }
  }
  async removeFromFvrt(id: number | undefined) {
    // if (await this.authService.isAuthenticate()) {
    this.store.dispatch(removeFromFavorites({ id }))
    alert("article removed from favorites")
    // this.router.navigateByUrl('/favorites')
    // } else {
    //   alert("Please login to save your favorites articles")
    // }
  }

}
