import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { isAdmin } from './auth/auth.guard';
import { AppStateModel } from './app.reducer';
import { Store } from '@ngrx/store';
import { AuthService } from './services/auth.service';
import { addToFavorites, loginUser } from './ngrx/user/actions/user.actions';
import { Subscription } from 'rxjs';
import { userInterface } from './utils/type.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-blog';

  // RxJS
  userObservable: Subscription


  // DIRECTIVES AND LIFE CYCLE
  //COSTRUCTOR
  constructor(
    private store: Store<AppStateModel>,
    private authService: AuthService
  ) {

    // Store (NgRx Store)
    //dispatching the user to store if they present in the localstorage, to maintain the persistancy

    this.userObservable = this.authService.user$.subscribe((user) => {
      console.log("logged in user", user);

      this.store.dispatch(loginUser({ user }))

      for (let id of user?.favorites || []) {
        this.store.dispatch(addToFavorites({ id }))
      }
    })

  }

  // DIRECTIVES AND LIFE CYCLE
  ngOnDestroy(): void {
    this.userObservable.unsubscribe()
  }

}
