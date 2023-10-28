import React, { Component } from 'react';
import "../Section.css";
import "./AboutMe.css";


class AboutMe extends Component {
    render(){
        if (this.props.rank === "first"){
            return(
                <div id="AboutMe" className='section aboutMe_one'>
                    <div className='container text'>
                        <h1 className='sectionTitle'>{this.props.text.aboutMe1.header}</h1>
                        <p>{this.props.text.aboutMe1.text}</p>
                    </div>
                </div>
            );
        } else if (this.props.rank === "second"){
            return(
                <div className='section aboutMe_two'>
                    <div className='container text'>
                    <h1 className='sectionTitle'>{this.props.text.aboutMe2.header}</h1>
                        <p>{this.props.text.aboutMe2.text}</p>
                    </div>
                </div>
            );
        } else if (this.props.rank === "three"){
            return(
                <div className='section aboutMe_three'>
                    <div className='container text'>
                    <h1 className='sectionTitle'>{this.props.text.aboutMe3.header}</h1>
                        <p>{this.props.text.aboutMe3.text}</p>
                    </div>
                </div>
            );
        }
    }
}





export default AboutMe;