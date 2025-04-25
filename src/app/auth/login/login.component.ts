import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/app.reducer';
import { getAllUsers, loginUser } from 'src/app/ngrx/user/actions/user.actions';
import { getUsers } from 'src/app/ngrx/user/selectors/user.selector';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { userInterface } from 'src/app/utils/type.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users: userInterface[] = []
  email: string = ''
  password: string = ''
  error: string = ''


  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<AppStateModel>,
    private authService: AuthService
  ) {
    // this.getUsers()
  }
  ngOnInit() {
    this.store.dispatch(getAllUsers())
    this.store.select(getUsers).subscribe((data) => {
      this.users = data

      console.log("users", this.users);

    })
  }

  // getUsers() {
  //   this.userService.getUsers().subscribe((data: userInterface[]) => {
  //     this.users = data
  //     console.log("users2", this.users);

  //   })
  // }

  submit(role: string) {
    console.log("role", role, "this.userName", this.email, "this.password", this.password);
    if (this.email && this.password) {
      const user = this.users.find((user) => user.email === this.email && user.password === this.password && user.role === role)
      if (user) {
        alert("login successfull")
        // let userData = user

        console.log("user", user, "users", this.users, "role", role, "user.password", user.password);

        // delete user?.password
        const userWithoutPassword = { ...user };
        delete userWithoutPassword.password;

        this.store.dispatch(loginUser({ user: userWithoutPassword }))
        // localStorage.setItem("user", JSON.stringify(user))
        this.authService.setUser(user)
        // this.router.navigate(['/'])
        this.router.navigateByUrl('/')

      }
      else alert(`No ${role} Found`)
    } else {
      this.error = "Email and Password are required"
    }

  }

  onTabChange() {
    this.email = ''
    this.password = ''
  }
}