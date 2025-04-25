import { Component } from '@angular/core';
import { isAdmin } from './auth/auth.guard';
import { AppStateModel } from './app.reducer';
import { Store } from '@ngrx/store';
import { AuthService } from './services/auth.service';
import { loginUser } from './ngrx/user/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-blog';

  constructor(
    private store: Store<AppStateModel>,
    private authService: AuthService
  ) {
    // console.log("isAdmin", isAdmin);
    this.authService.user$.subscribe((user) => {
      console.log("logged in user", user);

      // if (user) {
      this.store.dispatch(loginUser({ user }))
      // }
    })

  }
}
