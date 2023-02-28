import React, { Component } from 'react';
import NavBar from '../components/navBar/NavBar';
import AboutMe from '../components/section/aboutMe/AboutMe';
import Projects from '../components/section/projects/Projects';
import Contact from '../components/section/contact/Contact';
import Footer from '../components/section/footer/Footer';
import Landing from '../components/section/landing/Landing';

class App extends Component {
  render(){  
    return (
      <>
        <NavBar />
        <Landing />
        <AboutMe rank="first"/>
        <AboutMe rank="second"/>
        <AboutMe rank="three"/>
        <Projects />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
