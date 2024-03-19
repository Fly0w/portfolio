import React, { Component } from "react";
import PreviewProject from "./PreviewProject";
import Scroll from "./Scroll";
import Button from "./Button";
import Card from "./card/Card";
import UsedTools from "./UsedTools";
import React, { Component } from "react";
import PreviewProject from "./PreviewProject";
import Scroll from "./Scroll";
import Button from "./Button";
import Card from "./card/Card";
import UsedTools from "./UsedTools";
import "../Section.css";
import "./Projects.css";

import ShareHouse from "../../../assets/img/ShareHouseManager.jpg";
import OmoteBike from "../../../assets/img/Omotebike.jpg";
import Promptopia from "../../../assets/img/Promptopia.jpg";
import FaceToFace from "../../../assets/img/FacetoFace.jpg";
import Omotesando from "../../../assets/img/Omotesando.jpg";
import Robofriends from "../../../assets/img/Robofriends.jpg";
import BGGen from "../../../assets/img/BackgroundGenerator.jpg";
import Porfolio from "../../../assets/img/Portfolio.jpg";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      selectedProject: "ShareHouseManager",
      websitePreview: "https://share-house-manager-public.vercel.app/",
      gitHubPreview: "https://github.com/Fly0w/ShareHouseManagerPublic",
      localImg: ShareHouse,
    };
  }

  projects = [
    {
      projectName: "ShareHouseManager",
      website: "https://share-house-manager-public.vercel.app/",
      gitHub: "https://github.com/Fly0w/ShareHouseManagerPublic",
      localImg: ShareHouse,
    },
    {
      projectName: "Omotebike",
      website: "https://omote-bike-public.vercel.app/",
      gitHub: "https://github.com/Fly0w/omote-bike-public",
      localImg: OmoteBike,
    },
    {
      projectName: "Promptopia",
      website: "https://promptopia-fly0w.vercel.app/",
      gitHub: "https://github.com/Fly0w/Promptopia",
      localImg: Promptopia,
    },
    {
      projectName: "FacetoFace",
      website: "https://fly0w.github.io/facetoface/",
      gitHub: "https://github.com/Fly0w/facetoface",
      localImg: FaceToFace,
    },
    {
      projectName: "Omotesando",
      website: "https://fly0w.github.io/Omotesando1/",
      gitHub: "https://github.com/Fly0w/Omotesando1",
      localImg: Omotesando,
    },
    {
      projectName: "Robofriends",
      website: "https://fly0w.github.io/robofriends/",
      gitHub: "https://github.com/Fly0w/robofriends/tree/gh-pages",
      localImg: Robofriends,
    },
    {
      projectName: "BackgroundGenerator",
      website: "https://fly0w.github.io/background-generator/",
      gitHub: "https://github.com/Fly0w/background-generator",
      localImg: BGGen,
    },
    {
      projectName: "Portfolio",
      website: "https://fly0w.github.io/portfolio/",
      gitHub: "https://github.com/Fly0w/portfolio/tree/master",
      localImg: Porfolio,
    },
  ];

  switchProj = (proj) => {
    this.setState({ selectedProject: proj.projectName });
    this.setState({ websitePreview: proj.website });
    this.setState({ gitHubPreview: proj.gitHub });
    this.setState({ localImg: proj.localImg });
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
              {this.projects.map((elem) => (
                <Card
                  projectName={elem.projectName}
                  isClicked={() => this.switchProj(elem)}
                  linkImg={elem.localImg}
                />
              ))}
              {/* <Card
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
              /> */}
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
