import { Action } from '@ngrx/store'

export function simpleReducer(state: string='Hellow World', action: Action){

    console.log(action.type, state);

    switch(action.type){
        case('SPANISH'): {
            return state='الترحيب بالأسباني';
        }
        case('FRENCH'): {
            return state='الترحيب بالفرنسي';
        }
        default:
            return state;
    }

}