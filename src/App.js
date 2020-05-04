import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import 'antd/dist/antd.css';
import Source from './components/Source';
import store from './components/Redux/store';


class App extends Component {
  render() {
    return (
      <div>     
        <Provider store={store} >
          <Source/>
        </Provider>   
        
      </div>
    );
  }
}

export default App;
