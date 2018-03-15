import { Action } from '@ngrx/store';
import * as PostActions from './post.actions';
import { Post } from './post.model';

// default app state
const defaultState: Post = {
    title: 'Hello, I am the default state',
    likes: 0
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
}

export function postReducer(state: Post = defaultState, action: Action){
    // console.log(action.type, state);

    switch(action.type){

        case PostActions.EDIT_TITLE:
            return newState(state, { title: action.payload });

        case PostActions.UPVOTE:
            return newState(state, { likes: state.likes + 1 });
            
        case PostActions.DOWNVOTE:
            if(state.likes == 0){
                return newState(state, { likes: 0 });
            }
            return newState(state, { likes: state.likes - 1 });

        case PostActions.RESET:
            return defaultState;

        default:
            return state;

    }

}
