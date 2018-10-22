export enum TypeKeys {
    SUBMIT_NAME = "SUBMIT_NAME",
}

export interface SubmitName {
    type: TypeKeys.SUBMIT_NAME;
    name: string;
}
export type ActionTypes =
    | SubmitName


export const submitName = (name: string): SubmitName => ({
    type: TypeKeys.SUBMIT_NAME,
    name
});