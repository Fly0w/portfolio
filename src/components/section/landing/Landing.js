import React, { Component } from 'react';
import "../Section.css";
import "./Landing.css";
import NavButton from '../../navBar/NavButton';
import drawing from '../../img/drawing_me.jpg';


class Landing extends Component {
    render(){
        return(
            <div id="Landing" className='section landing'> 
                <div className='content animate__fadeInLeft'>
                    <h1 >Hi, my name is Florian Budniewski, and I work as a Web Developer in Japan.</h1>
                    <NavButton link={'AboutMe'} text='Learn more'/>
                </div>
                <img className='drawing' src={drawing} alt="Hi, it's me !"/>
            </div>
        );
    }
}

export default Landing;