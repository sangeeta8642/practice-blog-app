import { Component } from '@angular/core';
import { isAdmin } from './auth/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-blog';

  constructor() {
    console.log("isAdmin", isAdmin);

  }
}
