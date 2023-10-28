import React, { Component } from "react";
import PreviewProject from "./PreviewProject";
import Scroll from "./Scroll";
import Button from "./Button";
import Card from "./card/Card";
import UsedTools from "./UsedTools";
import "../Section.css";
import "./Projects.css";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      selectedProject: "ShareHouseManager",
      websitePreview: "https://share-house-manager-public.vercel.app/",
      gitHubPreview: "https://github.com/Fly0w/ShareHouseManagerPublic",
    };
  }

  projects = {
    ShareHouseManager: {
      projectName: "ShareHouseManager",
      website: "https://share-house-manager-public.vercel.app/",
      gitHub: "https://github.com/Fly0w/ShareHouseManagerPublic",
    },
    Omotebike: {
      projectName: "Omotebike",
      website: "https://omote-bike-public.vercel.app/",
      gitHub: "https://github.com/Fly0w/omote-bike-public",
    },
    Promptopia: {
      projectName: "Promptopia",
      website: "https://promptopia-fly0w.vercel.app/",
      gitHub: "https://github.com/Fly0w/Promptopia",
    },
    FacetoFace: {
      projectName: "FacetoFace",
      website: "https://fly0w.github.io/facetoface/",
      gitHub: "https://github.com/Fly0w/facetoface",
    },
    Omotesando: {
      projectName: "Omotesando",
      website: "https://fly0w.github.io/Omotesando1/",
      gitHub: "https://github.com/Fly0w/Omotesando1",
    },
    Robofriends: {
      projectName: "Robofriends",
      website: "https://fly0w.github.io/robofriends/",
      gitHub: "https://github.com/Fly0w/robofriends/tree/gh-pages",
    },
    BackgroundGenerator: {
      projectName: "BackgroundGenerator",
      website: "https://fly0w.github.io/background-generator/",
      gitHub: "https://github.com/Fly0w/background-generator",
    },
    Portfolio: {
      projectName: "Portfolio",
      website: "https://fly0w.github.io/portfolio/",
      gitHub: "https://github.com/Fly0w/portfolio/tree/master",
    },
  };

  switchProj = (nomProj) => {
    this.setState({ selectedProject: this.projects[nomProj].projectName });
    this.setState({ websitePreview: this.projects[nomProj].website });
    this.setState({ gitHubPreview: this.projects[nomProj].gitHub });
  };

  render() {
    return (
      <div className="section projects">
        <h1 id="Projects" className="sectionTitle">
          {this.props.text.header}
        </h1>
        <div className="listProjects">
          <div className="listCard">
            <Scroll>
              <Card
                projectName="ShareHouseManager"
                alter="Share house manager"
                isClicked={() => this.switchProj("ShareHouseManager")}
              />
              <Card
                projectName="Omotebike"
                alter="Shared bike management Website"
                isClicked={() => this.switchProj("Omotebike")}
              />
              <Card
                projectName="Promptopia"
                alter="Prompt Sharing Website"
                isClicked={() => this.switchProj("Promptopia")}
              />
              <Card
                projectName="FacetoFace"
                alter="Face Recognition App"
                isClicked={() => this.switchProj("FacetoFace")}
              />
              <Card
                projectName="Omotesando"
                alter="House Companion Project"
                isClicked={() => this.switchProj("Omotesando")}
              />
              <Card
                projectName="Robofriends"
                alter="Robofriends Project"
                isClicked={() => this.switchProj("Robofriends")}
              />
              <Card
                projectName="BackgroundGenerator"
                alter="BackgroundGenerator Project"
                isClicked={() => this.switchProj("BackgroundGenerator")}
              />
              <Card
                projectName="Portfolio"
                alter="Portfolio Project"
                isClicked={() => this.switchProj("Portfolio")}
              />
            </Scroll>
          </div>
          <div className="preview">
            <h2 className="title_proj">{this.state.selectedProject}</h2>
            <PreviewProject
              linkPreview={this.state.selectedProject}
              text={this.props.text}
            />
          </div>
          <div className="project_right">
            <Button
              text={this.props.text.buttons.visit}
              link={this.state.websitePreview}
            />
            <Button
              text={this.props.text.buttons.github}
              link={this.state.gitHubPreview}
            />
            <h2>Used Tools</h2>
            <UsedTools
              projectName={this.state.selectedProject}
              text={this.props.text.buttons.tools}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
