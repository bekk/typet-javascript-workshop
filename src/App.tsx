import * as React from 'react';
import './App.css';
import NameForm from "./NameForm";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NameForm label="Hei" />
      </div>
    );
  }
}

export default App;
