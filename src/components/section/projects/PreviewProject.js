import React, { Component } from 'react';
import OmotesandoPreview from "../../img/Omotesando preview.gif";
import RobofriendsPreview from "../../img/Robofriends preview.gif";
import BackgroundGeneratorPreview from "../../img/BackgroundGenerator preview.gif";
import PortfolioPreview from "../../img/Portfolio preview.gif";

class PreviewProject extends Component {
    render(){
       if (this.props.linkPreview === "Omotesando"){
            return(
                <div className="content_img">
                    <img src= {OmotesandoPreview} alt="Omotesando Project"/>
                    <div className="text_img">
                        <p>A simple website, with a practical use ! 
                        Managing chores in a place like a sharehouse is not always easy. The House Companion gives information regarding rubbish sorting to the weekly duos on duty !</p>
                    </div>
                </div>
            );
       } else if (this.props.linkPreview === "Robofriends"){
            return(
                <div className="content_img">
                    <img className="img__img" src= {RobofriendsPreview} alt="Robofriends Project"/>
                    <div className="text_img">
                        <p>A basic ReactJS App that I have made following a tutorial in the Zero To Mastery program. The app makes individual cards for every customer / robot with their personal information. The search bar is updated dynamically when the user types something in it.</p>
                    </div>
                </div>
            );
       } else if (this.props.linkPreview === "BackgroundGenerator"){
            return(
                <div className="content_img">
                    <img className="img__img" src= {BackgroundGeneratorPreview} alt="Background Generator Project"/>
                    <div className="text_img">
                        <p>Make your own color gradient using this simple website, and copy-paste the CSS property to put us it in your own websites ! So useful that I actually used it to make this website's backgrounds !</p>
                    </div>
                </div>
            );
        } else if (this.props.linkPreview === "Portfolio"){
            return(
                <div className="content_img">
                    <img className="img__img" src= {PortfolioPreview} alt="Portfolio Project"/>
                    <div className="text_img">
                        <p>The website you are actually browsing at the very moment ! I tried to use not only my knowledge, but also new things such as file download, new CSS properties and design in a more general way. Hope you like it !</p>
                    </div>
                </div>
            );
        }
    }
}

export default PreviewProject;