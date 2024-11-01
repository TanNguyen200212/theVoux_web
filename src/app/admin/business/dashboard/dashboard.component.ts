import { PostsService } from '../posts.service';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post.model';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, NgIf } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ChangeDetectorRef } from '@angular/core';
import { DashboardInfoComponent } from './dashboard-info/dashboard-info.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    NgIf,
    DashboardInfoComponent,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export default class DashboardComponent {
  loadedPosts: Post[] = [];
  dataSource: any[] = [];
  constructor(
    private http: HttpClient,
    private PostsService: PostsService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  openDialog(post?: Post): void {
    const dialogRef = this.dialog.open(DashboardInfoComponent, {
      data: {
        // title: this.title,
        // content: this.content,
        // title: post ? post.title : '',
        // content: post ? post.content : '',
        isEditMode: !!post,
      },
      height: '300px',
      width: '500px',
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   this.onFetchPosts();
    //   console.log('The dialog was closed');
    // });
    dialogRef.afterClosed().subscribe((result) => {
      //mo hop thoai va dki vao afterclosed tp cha
      if (result) {
        if (result.action == 'add') {
          this.loadedPosts.unshift(result.data);
          this.dataSource = [...this.loadedPosts];

        } else if (result.action == 'edit') {
          const index = this.loadedPosts.findIndex(
            (p) => p.id === result.data.id
          );
          this.loadedPosts[index] = result.data;

        }
      }
    });
    //
  }
}
