// Denne filen har satt opp en streng tsconfig, som anbefales på nye prosjekter
// og når du har kommet godt i gang med TypeScript.

// De fleste tingene som håndheves med denne konfigurasjonen er ting som mange
// uansett ville kommentert i pull requests i et erfarent TypeScript team, så
// det er bedre å la kompilatoren håndheve først som sist.

// Oppgaven her blir å få filen til å kompilere.

function square(n) {
  return n * n;
}

function foo(s: string | undefined | null) {
  return s.length;
}
