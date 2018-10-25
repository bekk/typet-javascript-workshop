export enum TypeKeys {
    REGISTER_NAME = "REGISTER_NAME",
    UNREGISTER_NAME = "UNREGISTER_NAME"
}

export interface RegisterName {
    type: TypeKeys.REGISTER_NAME;
    name: string;
    id: number;
}

export interface UnregisterName {
    type: TypeKeys.UNREGISTER_NAME;
    id: number;
}

export type ActionTypes = UnregisterName | RegisterName


export const registerName = (id: number, name: string): RegisterName => ({
    type: TypeKeys.REGISTER_NAME,
    name,
    id
});

export const unregisterName = (id: number): UnregisterName => ({
   type: TypeKeys.UNREGISTER_NAME,
   id
});