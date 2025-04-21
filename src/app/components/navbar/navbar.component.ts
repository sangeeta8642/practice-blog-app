import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { userInterface } from 'src/app/utils/type.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // user = JSON.parse(localStorage.getItem("user"))
  // user: userInterface

  // constructor() {
  //   const user = localStorage.getItem("user")
  //   this.user = user ? JSON.parse(user) : null
  //   console.log("user123", this.user);
  // }


  user: userInterface | undefined
  constructor(
    private authService: AuthService
  ) {
    this.authService.user$.subscribe((data) => {
      this.user = data as userInterface
      console.log("user", data);

    })
  }

  logOut() {
    this.authService.clearUser()
  }

  ngOnInit() {


  }


}