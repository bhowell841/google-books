import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import nav from './components/nav/nav';
// import form from './components/form/form';
import { BrowserRouter as Router, Route } from "react-router-dom";
import book from './pages/books';


function App() {
  return (
    <Router>
      <nav/>
      <form/>
      <Route exact path="/" component={book} />
      {/* <Route exact path="/saved" component={saved} /> */}
    </Router>
  );
}

export default App;
