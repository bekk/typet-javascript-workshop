### Typescript workshop

### Oppgave 1

Installer

```
 npm install
```


Lag NameForm.tsx og paste inn følgende kode:

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


1a) Få det til å bygge

1b) Bruk komponenten i App.tsx og få til å kjøre

1c) Få det til å kompilere uten å bruke (x: any)


### Oppgave 2

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
Få alt til å kompilere 
