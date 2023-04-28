import React, { Component } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";

class UsedTools extends Component {
    render(){
        if (this.props.projectName === "Omotesando"){
            return(
                <div className='listTools'>
                    <FaJs />
                    <FaHtml5 />
                    <FaCss3 />
                </div>
            );
       } else if (this.props.projectName === "Robofriends"){
            return(
                <div className='listTools'>
                    <FaReact />
                    <FaJs />
                    <FaHtml5 />
                    <FaCss3 />
                </div>
            );
       } else if (this.props.projectName === "BackgroundGenerator"){
            return(
                <div className='listTools'>
                    <FaJs />
                    <FaHtml5 />
                    <FaCss3 />
                </div>
            );
        } else if (this.props.projectName === "Portfolio"){
            return(
                <div className='listTools'>
                    <FaReact />
                    <FaJs />
                    <FaHtml5 />
                    <FaCss3 />
                </div>
            );
        }
    }
}

export default UsedTools;