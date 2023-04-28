import React, { Component } from 'react';
import "./Card.css";

class Card extends Component {  
    render(){
        const {isClicked, alter, projectName} = this.props;
        return(
            <img onClick={isClicked} className="card" alt={alter} src={"https://github.com/Fly0w/portfolio/blob/main/img/" + projectName + ".jpg?raw=true"} />
        );
    }
}
export default Card;