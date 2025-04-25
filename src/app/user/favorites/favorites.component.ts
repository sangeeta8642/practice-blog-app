import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/app.reducer';
// import { getUserFavorites } from 'src/app/ngrx/user/selectors/user.selector';
import { postInterface } from 'src/app/utils/type.interface';
import { PostsComponent } from '../posts/posts.component';
import { Allposts } from 'src/app/utils/constants';
import { getUserFavorites } from 'src/app/ngrx/user/selectors/user.selector';
// import { getUserFavorites } from 'src/app/ngrx/user/selectors/favorites.selector';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  posts: postInterface[] = []

  constructor(private store: Store<AppStateModel>) {
    // this.posts = Allposts
  }

  ngOnInit(): void {
    console.log("store852",this.store);
    
    this.store.select(getUserFavorites).subscribe((data) => {
      console.log("favorites", data);
      // this.posts = data
      this.posts = Allposts.filter((x) => {
        return data.some((y) => y === x.id)
      })
    })
  }
}
