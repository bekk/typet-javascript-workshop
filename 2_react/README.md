### Typescript React/Redux 

Vi har satt opp create-react-app med typescript for dere.

Kjøre `npm install` og start appen ved å kjøre `npm start`.

Man kan også bygge applikasjonen ved å kjøre `npm run build`

Dokumentasjon på create-react-app med typescript finner dere [her](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)


### Oppgave 1

I denne oppgaven skal vi type en helt vanlig react komponent.

Opprett NameForm.tsx og paste inn koden:

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

Nyttig dokumentasjon for [oppgave](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html#Write%20some%20code) 

a) Få det til å bygge uten kompileringsfeil

Tips: Hvis du sliter med å finne typen er det helt greit å bruke (x: any) 

b) Bruk komponenten i App.tsx og få til å kjøre

c) Få det til å kompilere uten å bruke (x: any)

Tips: Typen til eventen i handleSubmit er: React.FormEvent<HTMLFormElement> og typen til handleChange er React.FormEvent<HTMLInputElement>

For mer dokumentasjon se [typescript jsx dokumentasjon](https://www.typescriptlang.org/docs/handbook/jsx.html)

### Oppgave 2 Redux

I denne oppgaven setter vi fokus på Redux og hvordan vi kan utnytte Typescript

Opprett store/index.ts og paste inn:

```
export const REGISTER_NAME = 'REGISTER_NAME';

export const registerName = name => ({
    type: REGISTER_NAME,
    name
});
```

Opprett store/index.ts og paste inn:

 ```
 import {REGISTER_NAME} from "../actions";
 
 const initialState = {
   name: ''
 };
 
 export default (state = initialState, action) => {
     switch(action.type) {
         case REGISTER_NAME:
             return {
                 ...state,
                 name: action.name
             };
         default:
             return state;
     }
 }
 ```
 
 #### Action
 a) Lag enum av REGISTER_NAME
 
 Eksempel:
 
 ```tsx
 export enum Type {
     ACTION_TYPE = "ACTION_TYPE",
 }
 ```
 
 b) Implementer interface for registerName
 
 Eksempel:
 
 ```tsx
 export interface Action {
     type: TypeKeys.ACTION_TYPE;
 }
 ```
 
 #### Reducer
 
 a)  Opprett en union type over alle lovlige actions i actions.ts.
  
  Eksempel:
  
  ```tsx
  export type ActionTypes = Action1 | Action2
 
  ```
 b) Lag interface for State 
 
 c) Sett på typer i reduceren og få alt til å kompilere
 
 d) Bruk registerName i handleSubmit() i NamesForm.tsx
 
 e) Connect til redux store og oppdater interface for NameForm.tsx
 
 Test dette ved å for eksempel skrive ut navnet som ligger i storen.
 
 ### Oppgave 3 (Valgfritt)
 a) Utvid applikasjonen til å registerer navn i en liste som rendres ut
 
 b) Legg på funksjonalitet for å fjerne navn fra listen.
 
