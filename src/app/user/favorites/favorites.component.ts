import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/app.reducer';
// import { getUserFavorites } from 'src/app/ngrx/user/selectors/user.selector';
import { postInterface } from 'src/app/utils/type.interface';
import { PostsComponent } from '../posts/posts.component';
// import { Allposts } from 'src/app/utils/constants';
import { getUser, getUserFavorites } from 'src/app/ngrx/user/selectors/user.selector';
import { PostsService } from 'src/app/services/posts.service';
import { AuthService } from 'src/app/services/auth.service';
// import { getUserFavorites } from 'src/app/ngrx/user/selectors/favorites.selector';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  posts: postInterface[] = []
  allPosts: postInterface[] = []

  constructor(private store: Store<AppStateModel>, private postService: PostsService, private authService: AuthService) {
    // this.posts = Allposts
    // ngOnInit(): void {

    // }
  }

  ngOnInit(): void {
    console.log("store852", this.store);

    this.postService.getAllPosts().subscribe((posts) => {
      console.log("posts852", posts);
      // this.posts = data
      // this.allPosts = data

      this.store.select(getUserFavorites).subscribe((data) => {
        console.log("favorites", data, this.allPosts);

        // if (data.length > 0) {
        // this.posts = data
        this.posts = posts.filter((x) => {
          return data.some((y) => y === x.id)
        })
        // } else {
        // const user = this.authService.getUser()
        // this.posts = posts.filter((x) => {
        //   return user?.favorites?.some((y) => y === x.id)
        // })

        // }

        this.store.select(getUser).subscribe(async (user) => {
          // this.user = data as userInterface
          // console.log("updated user", user);
          localStorage.removeItem('user')
          localStorage.setItem('user', JSON.stringify(user))

        })
      })
    })
  }
}
