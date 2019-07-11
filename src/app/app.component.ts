import { Post } from './post.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFecthing = false;
  error = null;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit(): void {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postService
      .createAndStorePost(postData.title, postData.content)
      .subscribe(responseData => {
        console.log(responseData);
        this.onFetchPosts();
      });
  }

  onFetchPosts() {
    this.isFecthing = true;
    this.postService.fetchPosts().subscribe(
      posts => {
        this.isFecthing = false;
        this.loadedPosts = posts;
      },
      error => {
        this.isFecthing = false;
        this.error = error.message;
      }
    );
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }
}
