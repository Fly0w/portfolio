import React, { Component } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";

class UsedTools extends Component {
    render(){
        if (this.props.projectName === "Omotesando"){
            return(
                <div className="usedTools">
                <h2>Used Tools</h2>
                <div className='listTools'>
                    <FaJs />
                    <FaHtml5 />
                    <FaCss3 />
                </div>
            </div>
            );
       } else if (this.props.projectName === "Robofriends"){
            return(
                <div className="usedTools">
                <h2>Used Tools</h2>
                <div className='listTools'>
                    <FaReact />
                    <FaJs />
                    <FaHtml5 />
                    <FaCss3 />
                </div>
            </div>
            );
       } else if (this.props.projectName === "BackgroundGenerator"){
            return(
                <div className="usedTools">
                <h2>Used Tools</h2>
                <div className='listTools'>
                    <FaJs />
                    <FaHtml5 />
                    <FaCss3 />
                </div>
            </div>
            );
        } else if (this.props.projectName === "Portfolio"){
            return(
                <div className="usedTools">
                <h2>Used Tools</h2>
                <div className='listTools'>
                    <FaReact />
                    <FaJs />
                    <FaHtml5 />
                    <FaCss3 />
                </div>
            </div>
            );
        }
    }
}

export default UsedTools;