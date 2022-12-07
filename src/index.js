import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from "./StateProvider";
import reducer, {initialState} from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState = {initialState} reducer = {reducer}>
    <App />
    </StateProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// var numbers = [2,7,6];



// const newArray = numbers.map( (x) =>  x*x );

// console.log(newArray);









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
