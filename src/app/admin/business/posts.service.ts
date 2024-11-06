import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { catchError, map, tap, throwError } from 'rxjs';
import {BehaviorSubject,Subject, Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PostsService {

  isFetching = false;

  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$ = this.postsSubject.asObservable();


  constructor(private http: HttpClient) {}

  createAndStorePost(imageUrl:string,title: string, content: string): Observable<any> {
    const postData: Post = { imageUrl: imageUrl,title: title, content: content };
    console.log(postData);
    return this.http.post<{ name: string }>(
      'https://httpclient-a4bf8-default-rtdb.firebaseio.com/posts.json',
      postData
    ).pipe(
      map(responseData => {
        const newPost: Post = { id: responseData.name,imageUrl, title, content };
        this.postsSubject.next([...this.postsSubject.value, newPost]); // Add new post to the current list
        return responseData;
      })
    );
  }




  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://httpclient-a4bf8-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params: searchParams,
        }
      )
      .pipe(
        map((responseData: any) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://httpclient-a4bf8-default-rtdb.firebaseio.com/posts.json'
    );
  }

  private firebaseUrl =
    'https://httpclient-a4bf8-default-rtdb.firebaseio.com/posts';
  // Update a post by ID
  // updatePost(
  //   postId: string,
  //   postData: { title: string; content: string }
  // ): Observable<Post> {
  //   return this.http.put<Post>(`${this.firebaseUrl}/${postId}.json`, postData);
  // }

  updatePost(postId: string, postData: { title: string; content: string }): Observable<Post> {
    return this.http.put<Post>(`https://httpclient-a4bf8-default-rtdb.firebaseio.com/posts/${postId}.json`, postData)
      .pipe(
        map(responseData => {
          const updatedPosts = this.postsSubject.value.map(post =>
            post.id === postId ? { ...responseData, id: postId } : post
          );
          this.postsSubject.next(updatedPosts); // Update the list with the updated post
          return responseData;
        })
      );

  }


  // Delete a post by ID
  deletePost(postId: string): Observable<void> {
    return this.http.delete<void>(`${this.firebaseUrl}/${postId}.json`);
  }
}
