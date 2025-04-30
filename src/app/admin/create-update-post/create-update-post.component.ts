import { Component, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';
import { postInterface } from 'src/app/utils/type.interface';

@Component({
  selector: 'app-create-update-post',
  templateUrl: './create-update-post.component.html',
  styleUrls: ['./create-update-post.component.css'],
})
export class CreateUpdatePostComponent {
  // fb:new FormBuilder()
  route: string | null;
  postForm!: FormGroup;
  user: number | undefined;
  isCreate: boolean | null = null
  element: postInterface | undefined
  elementId: number | null = null

  // HOST BINDING AND ATTRIBUTE DIRECTIVES
  // HOST BINDING
  @HostBinding('class.create-mode') get isCreateMode() {
    return this.isCreate === true;
  }

  @HostBinding('class.update-mode') get isUpdateMode() {
    return this.isCreate === false;
  }

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
    private postService: PostsService
  ) {
    this.route = this.activeRoute.snapshot.paramMap.get('title');

    this.activeRoute.queryParamMap.subscribe((data) => {
      this.elementId = Number(data.get('id'))
      if (this.elementId) {
        this.postService.getPost(this.elementId).subscribe({
          next: (post) => {
            if (post) {
              this.isCreate = false
              this.element = post
              console.log("element found", this.element);
              this.postForm.patchValue(this.element)
              const tags = this.element?.tags.join(',')
              this.postForm.controls['postTag'].setValue(tags)
              const cats = this.element?.category.join(',')
              this.postForm.controls['postCat'].setValue(cats)
            }
          }, error: (err) => {
            this.isCreate = true
            this.router.navigateByUrl('/admin/post')
            console.log("element error", err);
          }
        })
      } else {
        this.isCreate = true
      }
    })

    this.user = this.authService.getUser()?.id;

    this.postForm = this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      desc: ['', [Validators.maxLength(500), Validators.required]],
      postTag: ['', Validators.required],
      postCat: ['', Validators.required],
      admin: [this.user],
    });
  }

  getErrorMessages(controlName: string): string[] {
    const control = this.postForm.get(controlName);
    const errorMessages: string[] = [];

    if (control && (control.touched || control.dirty) && control.invalid) {
      if (control.hasError('required')) {
        errorMessages.push(`${controlName} is required.`);
      }
      if (control.hasError('maxlength')) {
        errorMessages.push(`${controlName} exceeds the maximum length.`);
      }
    }

    return errorMessages;
  }

  async submit() {
    console.log('formData', this.postForm.value);

    const data = {
      title: this.postForm.value.title,
      image: this.postForm.value.image,
      desc: this.postForm.value.desc,
      admin: this.postForm.value.admin,
      tags: this.postForm.value.postTag?.split(','),
      category: this.postForm.value.postCat?.split(',')
    }

    if (this.isCreate) {
      this.postService.addPost(data).subscribe((res) => {
        console.log("result", res);
        if (res) {
          alert("post created successfully");
          this.router.navigateByUrl('/admin');
        }
      })
    } else if (!this.isCreate) {
      this.postService.updatePost(this.element?.id, data).subscribe((res) => {
        console.log("result", res);
        if (res) {
          alert("post updated successfully");
          this.router.navigateByUrl('/admin');
        }
      })
    }
  }
}
