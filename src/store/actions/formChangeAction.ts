import {ContactModel} from '../types/ContactModel';

export enum FormChangeActions {
    CHANGED = 'FormChangeActions.CHANGED'
};

export interface FormChangeAction {
    type: FormChangeActions;
    form: ContactModel;
}

export const formChangeAction = (contactModel: ContactModel): FormChangeAction => {
    return {
        type: FormChangeActions.CHANGED,
        form: contactModel
    };
};
