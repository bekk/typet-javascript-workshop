
// Nyttige linker:
// https://www.typescriptlang.org/docs/handbook/basic-types.html
// https://www.typescriptlang.org/docs/handbook/interfaces.html

// 1. Sett på typer slik at det ikke er noen feil, men det som er kommentert ut
// gir feil.

export function hello(name: string): string {
  return `Hello ${name}`;
}

hello('Bob');
// hello([1, 2, 3]); // Skal gi feil om du kommenterer inn.

export function returnNothing(): void {
    console.log("Sometimes we don't return anything!")
}

export function square(baseValue: number): number {
    return baseValue * baseValue
}

square(3);
// square('hello'); // Skal gi feil om du kommenterer inn.


// 2. Hvorfor er dette lov? Sett typer på funksjonen så det er synlig hva som
// skjer (trenger ikke være logisk kode).
export function anythingCanBeAny(anything) {
    return anything
}

const a: string = anythingCanBeAny(5);
const b: number[] = anythingCanBeAny('heisann');

// 3. Få koden til å kompilere.
interface Person {
    firstName: string,
    lastName: string
}

function greeting(person: Person): String {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let covid: Person = { firstName: "Covid", lastName: "19" };

greeting(covid);
