import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/app.reducer';
import { ChangeDetectorRef } from '@angular/core';
import { getAllUsers, loginUser } from 'src/app/ngrx/user/actions/user.actions';
import { getUsers } from 'src/app/ngrx/user/selectors/user.selector';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { userInterface } from 'src/app/utils/type.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: userInterface[] = [];
  email: string = '';
  password: string = '';
  error: string = '';

  loading: boolean = false;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private store: Store<AppStateModel>,
    private authService: AuthService
  ) {
    // this.getUsers()
  }
  ngOnInit() {
    // Store (NgRx Store)
    this.store.dispatch(getAllUsers());
    this.store.select(getUsers).subscribe((data) => {
      this.users = data;

      console.log('users', this.users);
    });
  }

  // getUsers() {
  //   this.userService.getUsers().subscribe((data: userInterface[]) => {
  //     this.users = data
  //     console.log("users2", this.users);

  //   })
  // }

  submit(role: string): void {
    this.loading = true;
    this.error = '';

    if (!this.email || !this.password) {
      this.loading = false;
      this.error = 'Email and Password are required';
      return;
    }

    setTimeout(() => {
      this.loading = false;
      const user = this.users.find(
        (user) =>
          user.email === this.email &&
          user.password === this.password &&
          user.role === role
      );

      if (user) {
        alert('Login successful');
        const userWithoutPassword = { ...user };
        delete userWithoutPassword.password;

        this.store.dispatch(loginUser({ user: userWithoutPassword }));
        this.authService.setUser(userWithoutPassword);
        this.router.navigateByUrl('/');
      } else {
        this.error = `No ${role} found`;
      }

      this.cdr.detectChanges();
    }, 2000);
  }

  onTabChange() {
    this.email = '';
    this.password = '';
  }
}
