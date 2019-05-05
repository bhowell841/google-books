import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import nav from './components/nav/nav';
import saved from './components/saved/saved';
import form from './components/form/form';
import search from './components/search/search';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <nav/>
      <form/>
      <Route exact path="/" component={search} />
      <Route exact path="/saved" component={saved} />
    </Router>
  );
}

export default App;
