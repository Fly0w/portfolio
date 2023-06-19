import React, { Component } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { SiHeroku, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";

class UsedTools extends Component {
    render(){
        if (this.props.projectName === "Omotebike"){
            return(
                <div className='listTools'>
                    <TbBrandNextjs />
                    <FaReact />
                    <SiMongodb />
                    <TbBrandVercel />
                </div>
            );
        }
        else if (this.props.projectName === "Promptopia"){
            return(
                <div className='listTools'>
                    <TbBrandNextjs />
                    <FaReact />
                    <SiMongodb />
                    <TbBrandVercel />
                </div>
            );
        }
        else if (this.props.projectName === "FacetoFace"){
            return(
                <div className='listTools'>
                    <FaReact />
                    <FaNodeJs />
                    <SiPostgresql />
                    <SiHeroku />
                </div>
            );
        } else if (this.props.projectName === "Omotesando"){
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