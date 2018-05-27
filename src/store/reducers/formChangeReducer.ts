import {FormChangeAction, FormChangeActions} from '../actions/formChangeAction';

export const formChangeReducer = (state = {}, action: FormChangeAction) => {
    switch (action.type) {
        case FormChangeActions.CHANGED:
            return {
                ...state,
                ...action.form
            };
        default:
            return state;
    }
}
