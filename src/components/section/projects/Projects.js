import React, { Component } from 'react';
import PreviewProject from './PreviewProject';
import Button from './Button';
import Card from './card/Card';
import UsedTools from './UsedTools';
import "../Section.css";
import "./Projects.css";


class Projects extends Component {
    constructor(){
        super();
        this.state = {
            selectedProject:"FacetoFace",
            websitePreview: "https://fly0w.github.io/facetoface/",
            gitHubPreview:"https://github.com/Fly0w/facetoface"
        }
    }

    projects ={
            FacetoFace: {
                projectName: "FacetoFace",
                website: "https://fly0w.github.io/facetoface/" ,
                gitHub: "https://github.com/Fly0w/facetoface"
                },
            Omotesando: {
                projectName: "Omotesando",
                website: "https://fly0w.github.io/Omotesando1/" ,
                gitHub: "https://github.com/Fly0w/Omotesando1"
                },
            Robofriends: {
                projectName: "Robofriends",
                website: "https://fly0w.github.io/robofriends/" ,
                gitHub: "https://github.com/Fly0w/robofriends/tree/gh-pages"
                },
            BackgroundGenerator: {
                projectName: "BackgroundGenerator",
                website: "https://fly0w.github.io/background-generator/" ,
                gitHub: "https://github.com/Fly0w/background-generator"
                },
            Portfolio: {
                projectName: "Portfolio",
                website: "https://fly0w.github.io/portfolio/" ,
                gitHub: "https://github.com/Fly0w/portfolio/tree/master"
                }, 
        };

    switchProj = (nomProj) =>{
        this.setState({selectedProject: this.projects[nomProj].projectName});
        this.setState({websitePreview: this.projects[nomProj].website});
        this.setState({gitHubPreview: this.projects[nomProj].gitHub});
    }
    
    render(){
        return(
            <div className='section projects'>
                <h1 id="Projects" className="sectionTitle">{this.props.text.header}</h1>
                <div className="listProjects">
                    <div className="listCard">
                        <Card projectName = "FacetoFace" alter="Face recognition app" isClicked={() => this.switchProj("FacetoFace")}/>
                        <Card projectName = "Omotesando" alter="House Companion Project" isClicked={() => this.switchProj("Omotesando")}/>
                        <Card projectName = "Robofriends" alter="Robofriends Project" isClicked={() => this.switchProj("Robofriends")}/>
                        <Card projectName = "BackgroundGenerator" alter="BackgroundGenerator Project" isClicked={() => this.switchProj("BackgroundGenerator")} />
                        <Card projectName = "Portfolio" alter="Portfolio Project" isClicked={() => this.switchProj("Portfolio")} />
                    </div>
                    <div className="preview">
                        <PreviewProject linkPreview={this.state.selectedProject} text={this.props.text}/>
                    </div>
                    <div className="project_right">
                        <Button text={this.props.text.buttons.visit} link={this.state.websitePreview} />
                        <Button text={this.props.text.buttons.github} link={this.state.gitHubPreview} />
                        <h2>Used Tools</h2>
                        <UsedTools projectName={this.state.selectedProject} text={this.props.text.buttons.tools} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;