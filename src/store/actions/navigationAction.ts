export enum NavigationActions {
    CHANGED = 'NavigationAction.CHANGED'
}

export interface NavigationAction {
    type: NavigationActions;
    name: string;
};

export const navigationAction = (name: string): NavigationAction => {
    return {
        type: NavigationActions.CHANGED,
        name
    };
};
