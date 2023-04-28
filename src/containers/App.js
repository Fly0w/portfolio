import React, { Component } from 'react';
import NavBar from '../components/navBar/NavBar';
import AboutMe from '../components/section/aboutMe/AboutMe';
import Projects from '../components/section/projects/Projects';
import Contact from '../components/section/contact/Contact';
import Footer from '../components/section/footer/Footer';
import Landing from '../components/section/landing/Landing';
import { translations } from '../components/translations';


class App extends Component {
  constructor(){
    super();
    this.state = {
      language : "en"
      }
  }
    handleChangeLanguage = (newLanguage) => {
      this.setState({language : newLanguage}, () => console.log(this.state.language));
    }
  
  render(){  
    return (
      <>
        <NavBar lang={this.state.language} handleChangeLanguage={this.handleChangeLanguage} text = {translations[this.state.language].navBar}/>
        <Landing text = {translations[this.state.language].landing}/>
        <AboutMe rank="first" text = {translations[this.state.language].aboutMe}/>
        <AboutMe rank="second" text = {translations[this.state.language].aboutMe}/>
        <AboutMe rank="three" text = {translations[this.state.language].aboutMe}/>
        <Projects text = {translations[this.state.language].projects}/>
        <Contact text = {translations[this.state.language].contact}/>
        <Footer text = {translations[this.state.language].footer}/>
      </>
    );
  }
}

export default App;
