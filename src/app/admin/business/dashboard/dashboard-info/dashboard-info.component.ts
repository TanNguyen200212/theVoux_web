import { PostsService } from './../../posts.service';

import { Component ,OnInit} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Inject } from '@angular/core';
import { take } from 'rxjs';

export interface DialogData {
  title: string;
  content: string;
  isEditMode: boolean;
  id: string;
  // fetchManual: any;
}

@Component({
  selector: 'app-dashboard-info',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent {
  postForm !: FormGroup;
  isEditMode = false;
  constructor(
    public dialogRef: MatDialogRef<DashboardInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private postsService: PostsService,
    private fb: FormBuilder
  ) {
    this.isEditMode = data.isEditMode;
    this.postForm = this.fb.group({
      title: [data.title, Validators.required],
      content: [data.content, Validators.required],
    });
  }

  ngOnInit() {
    this.isEditMode = !!this.data?.id;
    if (this.isEditMode) {
      this.postForm.patchValue(this.data);
    }
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),

      // fetchManual: new FormControl('', Validators.required),
    });
  }

  onCreatePost(postData: { title: string; content: string }) {
    if (this.postForm.valid) {
      console.log('Form Data:', this.postForm.value);
      this.postsService
        .createAndStorePost(postData.title, postData.content)
        .pipe(take(1))
        .subscribe((responseData) => {
          console.log('createAndStorePost.............', responseData);
          //const newPost: post = { id: responseData.name, title: postData.title, content: postData.content };
          //this.dialogRef.close({ action: 'add', data: newPost });
           //this.dialogRef.close();
          this.dialogRef.close({ action: 'add', data: responseData });

        });
      // this.postsService.createAndStorePost(postData.title, postData.content);
    } else {
      console.log('Form is invalid');
    }

  }
  onCancel() {
    this.dialogRef.close(); // Close the dialog without saving any changes
    //this.postForm.reset(); // Reset the form fields
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      if (this.isEditMode) {
        // Update the post
        this.postsService
          .updatePost(this.data.id, this.postForm.value)
          .pipe(take(1))
          .subscribe((responseData) => {

            this.dialogRef.close();
          //this.dialogRef.close({ action: 'edit', data: responseData });
          });

      } else {
        // Create a new post
        this.postsService
          .createAndStorePost(
            this.postForm.value.title,
            this.postForm.value.content
          )
          .pipe(take(1))
          .subscribe((responseData) => {
            this.dialogRef.close({ action: 'add', data: responseData });
          });
      }
    }
  }

}
