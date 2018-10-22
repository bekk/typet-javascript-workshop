import {ActionTypes, TypeKeys} from "./_actions";

const initialState: State = {
    name: ''
};

export interface State {
    readonly name: string,
}

export default (state: State = initialState, action: ActionTypes) => {
    switch(action.type) {
        case TypeKeys.SUBMIT_NAME:
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
}