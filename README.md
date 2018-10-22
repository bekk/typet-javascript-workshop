## Typescript workshop
#### IDE
Vi anbefaler at du bruker en ide som støtter typescript, som f.eks. Intellij eller Visual Studio Code
#### Intro

Vi har satt opp create-react-app med typescript for 
dere.

Start med å klone dette repoet, kjøre `npm install` og start appen ved å kjøre `npm run start`.

Man kan også bygge applikasjonen ved å kjøre `npm run build`

Dokumentasjon på create-react-app med typescript finner dere [her](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)

Følgende sider kan være en god start:

* [basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
* [interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
* [variable declaration](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

En liten ting som er greit å være klar over er hvordan TypeScript bruker
[type compatability](https://www.typescriptlang.org/docs/handbook/type-compatibility.html).
I motsetning til språk som f.eks. Java trenger ikke typer å være nøyaktig like, de trenger bare
å ha samme funksjonalitet for å være kompatible med hverandre.


TypeScript har også en god del avansert funksjonalitet som kan være veldig til hjelp. Det er derfor
også anbefalt å ta en liten titt på ting som:
* [Type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html):
Hvordan TypeScript ofte kan bestemme typer på ting uten at du trenger å være ekplisitt om det.
* [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html):
Mer avanserte datatyper. Som f.eks. union-types og intersection-types.

Det er greit å vite at TypeScript fint kjører side om side sammen med Javascript. I praksis betyr bare dette at TypeScript 
ikke kan gi deg så mye hjelp med å kjøre statisk analyse opp i mot javascript koden.

**Tema vi burde få inn:**
**Modellere objekter man får fra API'er, gir typesikkerhet under refaktoreringer etc.**
**Typeguards for å modellere feilstate etc. (f.eks etter fetching av data)**
**Nyttige småting som readonly etc.**