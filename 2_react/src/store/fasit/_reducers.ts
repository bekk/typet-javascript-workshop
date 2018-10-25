import {ActionTypes, TypeKeys} from "./_actions";

interface Name {
    name: string;
    id: number;
}

export interface Names extends Array<Name> {}

export interface Store {
    readonly names: Names;
}

const initialState: Store = {
    names: []
};



export default (state: Store = initialState, action: ActionTypes): Store => {
    switch(action.type) {
        case TypeKeys.REGISTER_NAME: {
            const newName = {
                name: action.name,
                id: action.id
            };
            return {
                ...state,
                names: [...state.names, newName]
            };
        }
        case TypeKeys.UNREGISTER_NAME:
            return {
                ...state,
                names: state.names.filter(name => name.id !== action.id)
            };
        default:
            return state;
    }
}