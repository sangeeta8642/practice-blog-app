import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
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
export class PostsComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, OnInit, DoCheck, AfterContentInit, AfterContentChecked {

  // VIEW CHILDREN AND CONTENT CHILDREN
  // VIEW CHILDREN
  @ViewChild('searchValue') seachValue = ''


  posts: postInterface[] = []
  allPosts: postInterface[] = []
  postsObservable!: Subscription
  startDate!: Date;
  endDate!: Date;

  // DIRECTIVES AND LIFE CYCLE
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


  // DIRECTIVES AND LIFE CYCLE
  ngOnInit(): void {
    this.postsObservable = this.postService.getAllPosts().subscribe((data) => {
      console.log("posts852", data);
      this.posts = data
      this.allPosts = data
    })
  } // DIRECTIVES AND LIFE CYCLE
  ngDoCheck(): void {
    console.log('%cngDoCheck', 'color: blue');
  }

  // DIRECTIVES AND LIFE CYCLE
  ngAfterContentInit(): void {
    console.log('%cngAfterContentInit', 'color: teal');
  }

  // DIRECTIVES AND LIFE CYCLE
  ngAfterContentChecked(): void {
    console.log('%cngAfterContentChecked', 'color: teal');
  }

  // DIRECTIVES AND LIFE CYCLE
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  // DIRECTIVES AND LIFE CYCLE
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }


  ngOnDestroy(): void {
    this.postsObservable.unsubscribe()
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
