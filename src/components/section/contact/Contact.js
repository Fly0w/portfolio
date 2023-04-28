import React, { Component } from 'react';
import "../Section.css";
import "./Contact.css";
import { FaFacebook, FaGithub, FaInstagram, FaLine, FaLinkedinIn, FaYoutube, FaEnvelopeOpenText,  } from "react-icons/fa";
import drawing from '../../img/drawing_me.jpg';

class Contact extends Component {
    render(){
        return(
            <div className='section contact'>
                <div className="group">
                    <h1 id="Contact" className="sectionTitle">{this.props.text.header}</h1>
                    <div id="message">
                        <img className="drawing" src={drawing} alt="Cool drawing huh?"/>
                        <p> {this.props.text.text}<br/><span>{this.props.text.nameSpan}</span></p>
                    </div>
                </div>
                <div className="listIcons">
                    <h1><a href="https://www.facebook.com/florian.budniewski/" target="_blank" rel="noreferrer" ><FaFacebook /></a></h1>
                    <h1><a href="https://github.com/Fly0w" target="_blank" rel="noreferrer" ><FaGithub /></a></h1>
                    <h1><a href="https://www.instagram.com/florian_budniewski/?hl=fr" target="_blank" rel="noreferrer" ><FaInstagram /></a></h1>
                    <h1><a href="https://linevoom.line.me/user/_dRCwrOokeCeQW-pfEhnnHGRXVTZugr_IxyJSd1Y" target="_blank" rel="noreferrer" ><FaLine /></a></h1>
                    <h1><a href="https://www.linkedin.com/in/florian-budniewski/?locale=en_US" target="_blank" rel="noreferrer" ><FaLinkedinIn /></a></h1>
                    <h1><a href="https://www.youtube.com/@KarasuCrowFly0/videos" target="_blank" rel="noreferrer" ><FaYoutube /></a></h1>
                    <h1><a href={`mailto:florian.budniewski@hotmail.com?subject=Contact&body=I love your work, let's work together !`}target="_blank" rel="noreferrer" ><FaEnvelopeOpenText /></a></h1>
                </div>
            </div>
        );
    }
}

export default Contact;