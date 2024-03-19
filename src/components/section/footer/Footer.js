import React, { Component } from 'react';
import "../Section.css";
import "./Footer.css";



class Footer extends Component {
    render(){
        return(
            <div className='section footer'>
                <p id="Footer">{this.props.text.text}</p>
            </div>
        );
    }
}

export default Footer;