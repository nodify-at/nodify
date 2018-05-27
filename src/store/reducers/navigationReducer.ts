import {NavigationAction, NavigationActions} from '../actions/navigationAction';

export const navigationReducer = (state = {}, action: NavigationAction) => {
    switch (action.type) {
        case NavigationActions.CHANGED: {
            return {name: action.name};
        }
        default: {
            return state;
        }
    }
};
