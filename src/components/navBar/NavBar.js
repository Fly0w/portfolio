import React, { Component } from 'react';
import NavButton from './NavButton';
import './NavBar.css';
import Resume from "../img/Résumé.pdf"


class NavBar extends Component {
    render(){
        return (
            <div className='navbar'>
                <NavButton link={'AboutMe'} text='About me'/>
                <NavButton link={'Projects'} text='Projects'/>
                <NavButton link={'Contact'} text='Contact'/>
                <a href={Resume} download target="_blank" rel="noreferrer">Résumé</a> 
            </div>
          );
 }
}

export default NavBar;


