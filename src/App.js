import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";

import Navbar from "./components/navbar.component";
import ContactsList from "./components/contacts-list.component";
import EditContact from "./components/edit-contact.component";
import CreateContact from "./components/create-contact.component";


function App() {
  return (
    <Router>
      <div className="container">
        <div className="table-wrapper">
          <Navbar />
          <br />
          <Route path="/" exact component={ContactsList} />
          <Route path="/edit/:id" exact component={EditContact} />
          <Route path="/create" exact component={CreateContact} />
        </div>
      </div>
    </Router>
  );
}

export default App;
