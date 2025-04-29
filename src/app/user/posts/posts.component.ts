import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/app.reducer';
import { getPosts } from 'src/app/ngrx/posts/selectors/posts.selectors';
import { PostsService } from 'src/app/services/posts.service';
// import { Allposts } from 'src/app/utils/constants';
import { postInterface } from 'src/app/utils/type.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @ViewChild('searchValue') seachValue = ''


  posts: postInterface[] = []
  allPosts: postInterface[] = []
  startDate!: Date;
  endDate!: Date;

  constructor(private store: Store<AppStateModel>, private postService: PostsService) {
    // this.store.select(getPosts).subscribe((posts) => {
    //   console.log("posts in parent", posts);
    // })


  }

  onDateChange() {
    console.log("startDate", this.startDate, "endDate", this.endDate);

    if (!this.startDate || !this.endDate) return;

    const start = new Date(this.startDate).getTime();
    const end = new Date(this.endDate).getTime();

    this.posts = this.allPosts.filter(post => {
      if (!post.createdAt) return false;
      const postDate = new Date(post.createdAt).getTime();
      return postDate >= start && postDate <= end;
    });
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data) => {
      console.log("posts852", data);
      this.posts = data
      this.allPosts = data
    })
  }

  searchPosts(event: Event) {

    let value = event.target as HTMLInputElement
    console.log("searchValue", value.value);

    if (value.value) {
      this.posts = this.allPosts.filter((x: postInterface) => {
        return x.title.toLowerCase().includes(value.value.toLowerCase()) ||
          x.desc.toLowerCase().includes(value.value.toLowerCase())
      })
    } else {
      this.posts = this.allPosts
    }

  }
}
