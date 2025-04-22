import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postInterface } from 'src/app/utils/type.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() posts!: postInterface[];



  constructor(
    private router: Router
  ) {

  }

  viewPost(post: postInterface) {
    this.router.navigateByUrl('/view-post', { state: post })
  }

  ngOnInit(): void {
    // console.log("");
    console.log("posts", this.posts);

  }
}
