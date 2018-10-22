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

### Oppgave 1

Opprett NameForm.tsx og paste inn følgende kode:

```jsx harmony
import React from 'react';
import PropTypes from 'prop-types';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        value: ''
    };

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    handleSubmit = event => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {this.props.label}
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

NameForm.propTypes = {
    label: PropTypes.string
};

export default NameForm;

```


a) Få det til å bygge

b) Bruk komponenten i App.tsx og få til å kjøre

c) Få det til å kompilere uten å bruke (x: any) **her burde vi skrive litt om/linke til typene til events i react.**

### Oppgave 2
Default verdier og partial types.

I JSX verden kan man blant annet definere default verdier for proptypes til en komponent slik:
```
class NameForm extends React.Component {
...
}

NameForm.propTypes = {
    label: PropTypes.string
    type: PropTypes.string
};

NameForm.defaultProps = {
    label: "defaultLabel"
}
```
Partial types lar oss definere typer som er subsett av deler av andre typer ved å si at alle properties av type T er optional. Definisjonen ser slik ut: 
```
type Partial<T> = { [P in keyof T]?: T[P]; };
```

a) Utnytt partial types for å sette en default verdi på label i typescript komponenten din.
(Man kan sette `public static defaultProps = {}` inne i komponenten.)

### Oppgave 3

Legg til Redux

```
npm install redux react-redux redux-thunk --save
```

Opprett actions/index.ts og paste inn:

```
export const SUBMIT_NAME = 'SUBMIT_NAME';

export const submitName = name => ({
    type: SUBMIT_NAME,
    name
});
```

Opprett reducers/index.ts og paste inn:
 ```
 import {SUBMIT_NAME} from "../actions";
 
 const initialState = {
   name: ''
 };
 
 export default (state = initialState, action) => {
     switch(action.type) {
         case SUBMIT_NAME:
             return {
                 ...state,
                 name: action.name
             };
         default:
             return state;
     }
 }
 ```
 
Opprette store.ts og paste inn:

```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}
``` 
 a) Få alt til å kompilere
 
 b) Bruk submitName i NameForm handleSubmit()
