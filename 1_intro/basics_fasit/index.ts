export function anythingCanBeAny(anything: any): any {
    return anything
}

export function hello(name: string): string {
  return `Hello ${name}`;
}

export function returnNothing(): void {
    console.log("Sometimes we don't return anything!")
}

export function square(baseValue: number): number {
    return baseValue * baseValue
}

export function TupleOfDifferentArrays(arrayOfStrings: string[], arrayOfNumbers: number[]): [string[], number[]] {
    let x: [string[], Array<number>];
    x = [arrayOfStrings, arrayOfNumbers];
    return x
}
