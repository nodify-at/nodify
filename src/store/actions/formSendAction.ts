import {ContactModel} from '../types/ContactModel';

export enum FormSendActions {
    REQUEST = 'FormSendActions_REQUEST',
    SUCCESS = 'FormSendActions_SUCCESS',
    FAILED  = 'FormSendActions_FAILED',
};

export interface FormSendAction {
    types: FormSendActions[];
    payload: any;
}

export const formSendAction = (payload: ContactModel): FormSendAction => {

    return {
        types  : [FormSendActions.REQUEST, FormSendActions.SUCCESS, FormSendActions.FAILED],
        payload: {
            request: {
                method: 'POST',
                url   : `nodify-mailer/send`,
                data  : payload
            }
        }
    };
};
