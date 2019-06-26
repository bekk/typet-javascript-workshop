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


// 2. Hvorfor er dette lov? Sett typer på funksjonen så det er synlig hva som
// skjer (trenger ikke være logisk kode).
export function anythingCanBeAny(anything) {
    return anything
}

const a: string = anythingCanBeAny(5);
const b: number[] = anythingCanBeAny('heisann');
