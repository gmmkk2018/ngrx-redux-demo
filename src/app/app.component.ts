import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from './post.model';
import * as PostActions from './post.actions';

interface AppState{
  post:Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  post$: Observable<Post>;
  title: string;

  constructor(private store: Store<AppState>){
    this.post$ = this.store.select('post');
  }

  editTitle(){
    this.store.dispatch(new PostActions.EditTitle(this.title));
  }

  upvote(){
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote(){
    this.store.dispatch(new PostActions.Downvote());
  }

}
