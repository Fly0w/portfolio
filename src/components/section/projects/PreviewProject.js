import React, { Component } from 'react';

class PreviewProject extends Component {
    render(){
       if (this.props.linkPreview === "Omotesando"){
            return(
                <div className="content_img">
                    <img preload="auto" className="img__img" src= "https://github.com/Fly0w/portfolio/blob/main/gif/Omotesando%20preview-min.gif?raw=true" alt="Omotesando Project"/>                  
                    <div className="text_img">
                        <p>{this.props.text.omotesando}</p>
                    </div>
                </div>
            );
       } else if (this.props.linkPreview === "Robofriends"){
            return(
                <div className="content_img">
                    <img preload="auto" className="img__img" src= "https://github.com/Fly0w/portfolio/blob/main/gif/Robofriends%20preview-min.gif?raw=true" alt="Robofriends Project"/>
                    <div className="text_img">
                        <p>{this.props.text.robofriends}</p>
                    </div>
                </div>
            );
       } else if (this.props.linkPreview === "BackgroundGenerator"){
            return(
                <div className="content_img">
                    <img preload="auto" className="img__img" src= "https://github.com/Fly0w/portfolio/blob/main/gif/BackgroundGenerator%20preview-min.gif?raw=true" alt="Background Generator Project"/>
                    <div className="text_img">
                        <p>{this.props.text.backgroundGenerator}</p>
                    </div>
                </div>
            );
        } else if (this.props.linkPreview === "Portfolio"){
            return(
                <div className="content_img">
                    <img preload="auto" className="img__img" src= "https://github.com/Fly0w/portfolio/blob/main/gif/Portfolio%20preview-min.gif?raw=true" alt="Portfolio Project"/>
                    <div className="text_img">
                        <p>{this.props.text.portfolio}</p>
                    </div>
                </div>
            );
        }
    }
}

export default PreviewProject;