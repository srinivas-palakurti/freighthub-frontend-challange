import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { createStore, applyMiddleware, compose } from "redux";
// import { Provider } from "react-redux";
// import thunk from "react-thunk";
// import {  } from "module";

import ShipmentsList from "./components/ShipmentsList.jsx";
import { Provider } from "react-redux";
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
        </header>
        <ShipmentsList />
      </div>
    </Provider>
  );
}

export default App;
