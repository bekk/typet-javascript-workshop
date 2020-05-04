## Typescript workshop

#### IDE
Vi anbefaler at du bruker en IDE som støtter TypeScript, som f.eks. IntelliJ IDEA (krever dessverre Ultimate) eller Visual Studio Code.
- [Atom TypeScript plugin](https://atom.io/packages/atom-typescript)
- [Sublime TypeScript plugin](https://packagecontrol.io/packages/TypeScript)

#### Intro

Følgende sider kan være en god start:

* [basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
* [interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
* [variable declaration](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

En liten ting som er greit å være klar over er hvordan TypeScript definerer
[type compatability](https://www.typescriptlang.org/docs/handbook/type-compatibility.html).
I motsetning til språk som f.eks. Java er to typer kompatible hvis de er ekvivalente, de trenger ikke ha samme navn eller vite om hverandre. Har altså to typer de samme feltene, er de den samme typen.


TypeScript har også en god del avansert funksjonalitet som kan være veldig til hjelp. Det er derfor
også anbefalt å ta en liten titt på ting som:
* [Type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html):
Hvordan TypeScript ofte kan bestemme typer på ting uten at du trenger å være ekplisitt om det.
* [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html):
Mer avanserte datatyper. Som f.eks. union-types og intersection-types.

Det er greit å vite at TypeScript fint kjører side om side sammen med Javascript. I praksis betyr bare dette at TypeScript
ikke kan gi deg så mye hjelp med å kjøre statisk analyse opp i mot javascript koden.

### Oppgaver
Oppgavene er delt inn i 3 deler. Start med 1_intro.

#### [1_Introduksjon](https://github.com/bekk/typet-javascript-workshop/tree/master/1_Introduksjon)

#### [2_react](https://github.com/bekk/typet-javascript-workshop/tree/master/2_react)

#### [3_avansert](https://github.com/bekk/typet-javascript-workshop/tree/master/3_avansert)


Presentasjonen kan dere finne [her](https://slides.com/evestera/typescript)
