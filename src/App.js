import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Converter} from './components/Converter';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Converter/>
      </BrowserRouter>
    );
  }
}

export default App;