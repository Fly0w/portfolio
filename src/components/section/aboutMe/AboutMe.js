import React, { Component } from 'react';
import "../Section.css";
import "./AboutMe.css";


class AboutMe extends Component {
    render(){
        if (this.props.rank === "first"){
            return(
                <div id="AboutMe" className='section aboutMe_one'>
                    <div className='container text'>
                        <h1 className='sectionTitle'>It all started as a dream...</h1>
                        <p>Graduated from an Engineering school in France, I have decided to quit my job as a Research & Development Engineer in the industry of filtration after 3 years, to follow my long-time dream to come and live in Japan</p>
                    </div>
                </div>
            );
        } else if (this.props.rank === "second"){
            return(
                <div className='section aboutMe_two'>
                    <div className='container text'>
                    <h1 className='sectionTitle'>Improve to Survive</h1>
                        <p>Self-taught Front-End Web Developer, I have started learning the fundamentals of Web Development in December 2022, and since then, I have never stopped learning and sharpening my skills day after day</p>
                    </div>
                </div>
            );
        } else if (this.props.rank === "three"){
            return(
                <div className='section aboutMe_three'>
                    <div className='container text'>
                    <h1 className='sectionTitle'>Never Settle</h1>
                        <p>My goal is to reach a near perfection state in everything I engage myself in. Becoming a reliable, smart and trustworthy human is the never-ending, life-long quest I am pursuing. To me, it begins with an open-mind, a social and emotional intelligence, as well as a strong will to actually make things change</p>
                    </div>
                </div>
            );
        }
    }
}


export default AboutMe;