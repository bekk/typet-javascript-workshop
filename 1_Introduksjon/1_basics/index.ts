
// Nyttige linker:
// https://www.typescriptlang.org/docs/handbook/basic-types.html
// https://www.typescriptlang.org/docs/handbook/interfaces.html

// 1. Sett på typer slik at det ikke er noen feil, men det som er kommentert ut
// gir feil.

export function hello(name) {
  return `Hello ${name}`;
}

hello('Bob');
// hello([1, 2, 3]); // Skal gi feil om du kommenterer inn.

export function returnNothing() {
    console.log("Sometimes we don't return anything!")
}

export function square(baseValue) {
    return baseValue * baseValue
}

square(3);
// square('hello'); // Skal gi feil om du kommenterer inn.


// 2. Hvorfor er det lov å kalle anythingCanBeAny(5) og anythingCanBeAny('heisann')?
// Sett typer på funksjonen så det er synlig hva som skjer (trenger ikke være logisk kode).
export function anythingCanBeAny(anything) {
    return anything
}

const a: string = anythingCanBeAny(5);
const b: number[] = anythingCanBeAny('heisann');


// 3. Sett på typer og få koden til å kompilere
interface Person {
}

function greeting(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let covid = { firstName: "Covid", lastName: "19" };

greeting(covid);