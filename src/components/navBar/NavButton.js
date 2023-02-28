import React, { Component } from 'react';
import { Link } from "react-scroll";

class NavButton extends Component {
       render(){
        return (
        <Link 
            activeClass="active" 
            to={this.props.link} 
            spy={true} 
            smooth={true} 
            offset={-25} 
            duration={400}
        >
        {this.props.text}
        </Link>
        );
    }
}

export default NavButton;
