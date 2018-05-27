import {FormSendActions} from '../actions/formSendAction';

export const formChangeReducer = (state = {}, action) => {
    switch (action.type) {
        case FormSendActions.SUCCESS:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};
