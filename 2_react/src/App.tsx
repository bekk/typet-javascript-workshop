import * as React from 'react';
import './App.css';
import NameForm from './fasit/_NameForm';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NameForm label="Navn" />
      </div>
    );
  }
}

export default App;
