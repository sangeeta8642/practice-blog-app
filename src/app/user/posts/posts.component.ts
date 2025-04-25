import { Component, Input, ViewChild } from '@angular/core';
import { Allposts } from 'src/app/utils/constants';
import { postInterface } from 'src/app/utils/type.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @ViewChild('searchValue') seachValue = ''


  posts = Allposts

  constructor() {
    console.log("posts in parent", this.posts);

  }


  searchPosts(event: Event) {

    let value = event.target as HTMLInputElement
    console.log("searchValue", value.value);

    if (value.value) {
      this.posts = Allposts.filter((x: postInterface) => {
        return x.title.toLowerCase().includes(value.value.toLowerCase()) ||
          x.desc.toLowerCase().includes(value.value.toLowerCase())
      })
    } else {
      this.posts = Allposts
    }

  }
}
