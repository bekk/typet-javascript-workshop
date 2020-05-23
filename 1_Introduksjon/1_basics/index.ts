// Nyttige linker:
// https://www.typescriptlang.org/docs/handbook/basic-types.html

// Oppgave 1. Sett typer på variablene under
// Som i JavaScript er alle tall i TypeScript float behind the hood.

let age = 0.5;

let isActive = true;

let status = `Covid-19 er ${age} år og ${ isActive ? 'er fortsatt aktiv :(' : 'er ikke lenger aktiv :)' }`;

console.log(status);

// Oppgave 2. Sett på typer slik at det ikke er noen feil, men det som er kommentert ut gir feil.

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


// Oppgave 3. Hvorfor er det lov å kalle anythingCanBeAny(5) og anythingCanBeAny('heisann')?
// Sett typer på funksjonen så det er synlig hva som skjer (trenger ikke være logisk kode).
export function anythingCanBeAny(anything) {
    return anything
}

const a = anythingCanBeAny(5);

const b = anythingCanBeAny('heisann');
