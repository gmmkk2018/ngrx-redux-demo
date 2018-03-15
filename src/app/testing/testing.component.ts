import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from '../post.model';
import * as PostActions from '../post.actions';

interface AppState{
  post:Post;
}

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  post$: Observable<Post>;
  text: string;

  constructor(private store: Store<AppState>){
    this.post$ = this.store.select('post');
  }

  ngOnInit() {
  }

}
