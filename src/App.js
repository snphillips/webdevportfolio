import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Statement from './Statement';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import SoTrashy from './SoTrashy';

export default class App extends Component {
  render() {
    return (
      <div>

        <Navigation />

        <div className="row align-items-center" id="header-statement">
          <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5"><Header /></div>
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-7"><Statement /></div>
          <div className="col-sm-1 col-md-1 col-lg-0 col-xl-0"></div>
        </div>


        <Projects />
        <About />
        <Skills />
        <Contact />
      </div>
    );
  }
}


        // <div className="row"></div>
        // <Header />
        // <Statement />
