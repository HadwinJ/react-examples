import { store } from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/Main';
// import { Dashboard } from './components/Dashboard';

// console.log("Hello world!");
// console.log(store.getState());

ReactDOM.render(
    <Main />,
    document.getElementById("app")
);