import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { userInterface } from 'src/app/utils/type.interface';

@Component({
  selector: 'app-create-update-post',
  templateUrl: './create-update-post.component.html',
  styleUrls: ['./create-update-post.component.css'],
})
export class CreateUpdatePostComponent {
  // fb:new FormBuilder()
  route: string | null;
  postForm!: FormGroup;
  user: string | undefined;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.route = this.activeRoute.snapshot.paramMap.get('title');
    if (this.route !== 'create' && this.route !== 'update') {
      this.router.navigateByUrl('/');
    }

    this.user = this.authService.getUser()?.id;

    this.postForm = this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      desc: ['', [Validators.maxLength(50), Validators.required]],
      postTag: ['', Validators.required],
      postCat: ['', Validators.required],
      admin: [this.user],
    });
    // console.log('route', this.route);
  }

  submit() {
    console.log('formData', this.postForm.value);
  }
}
