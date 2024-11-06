import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import DashboardComponent from '../dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Post } from '../post.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DashboardInfoComponent } from '../dashboard/dashboard-info/dashboard-info.component';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule,
  MatButtonModule,
  FormsModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  HttpClientModule,
  NgIf,
  ReactiveFormsModule,
  MatSnackBarModule,
  MatDialogModule],
  templateUrl: './tables.component.html',
  styleUrls:[ './tables.component.css'],
})
export default class TablesComponent {
  ngForm = false;
  error = null;
  title: string = '';
  content: string = '';
  displayedColumns: string[] = ['imageUrl','title', 'content', 'actions'];
  dataSource: any[] = [];
  isFetching: boolean = false;
  loadedPosts: Post[] = [];
  private _snackBar = Inject(MatSnackBar);
  posts: any;

  constructor(
    private Http: HttpClient,
    private postsService: PostsService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  //xu li du lieu khi dong hop thoai
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
          this.onFetchPosts();
        } else if (result.action == 'edit') {
          const index = this.loadedPosts.findIndex(
            (p) => p.id === result.data.id
          );
          this.loadedPosts[index] = result.data;
          this.onFetchPosts();
        }

        // this.dataSource = [...this.loadedPosts];
        // this.changeDetectorRef.detectChanges();
      }
    });
    //
  }

  ngOnInit() {
    this.postsService.isFetching = true;
    this.postsService.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts;
      this.dataSource = [...this.loadedPosts];
      // this.postsService.isFetching = false;
      // this.postsService.loadedPosts = posts;
    });
    this.postsService.fetchPosts().subscribe((posts) => {
      this.dataSource = posts;
    });
  }

  // kéo toàn bộ post sau khi thêm mới, nếu có 1k thì phải kéo về mới toàn bộ 1000 có cách nào tối ưu không, xài redux hay, tạo 1 mảng local lấy trước dữ liueej từ api, nếu thêm mới thì thêm chèn cái mới vào local, call api riêng hay api có phân trang
  onFetchPosts() {
    this.postsService.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts;
      // this.postsService.isFetching = false;
      // this.postsService.loadedPosts = posts;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onDelete(postId: string) {
    if (confirm('Bạn có chắc chắn muốn xóa ?')) {
      this.postsService.deletePost(postId).subscribe(() => {
        console.log('xoá thành công');
        this.onFetchPosts(); // Refresh the table after deletion
      });
    }
  }

  //edit
  onEdit(post: Post): void {
    const dialogRef = this.dialog.open(DashboardInfoComponent, {
      width: '300px',
      data: { ...post }, // Pass a copy of the post to the dialog
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.postsService
          .updatePost(post.id!, result)
          .subscribe((responseData) => {
            this._snackBar.open('Post updated successfully', 'Close', {
              duration: 3000,
            });
            this.posts = this.posts.map((p: { id: string | undefined }) =>
              p.id === post.id ? { ...responseData } : p
            );
            // Refresh the table after editing
            console.log('createAndStorePost.............', responseData);
          });
      }
      this.onFetchPosts();
    });
  }
}
