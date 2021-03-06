import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';


import { postReducer } from './post.reducer';


import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';


@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      // message: simpleReducer,
      post: postReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
