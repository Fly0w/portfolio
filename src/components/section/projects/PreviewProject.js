import React, { Component } from "react";
import gifShareHouse from "../../../assets/gif/ShareHouseManager-min.gif";
import gifOmoteBike from "../../../assets/gif/Omote Bike preview.gif";
import gifPromptopia from "../../../assets/gif/Promptopia preview.gif";
import gifFaceToFace from "../../../assets/gif/FacetoFace preview-min.gif";
import gifOmotesando from "../../../assets/gif/Omotesando preview-min.gif";
import gifRobofriends from "../../../assets/gif/Robofriends preview-min.gif";
import gifBG from "../../../assets/gif/BackgroundGenerator preview-min.gif";
import gifPorfolio from "../../../assets/gif/Portfolio preview-min.gif";

class PreviewProject extends Component {
  render() {
    if (this.props.linkPreview === "ShareHouseManager") {
      return (
        <div className="content_img">
          <img
            preload="auto"
            className="img__img"
            src={gifShareHouse}
            alt="Share House Manager Project"
          />
          <div className="text_img">
            <p>{this.props.text.shareHouseManager}</p>
          </div>
        </div>
      );
    } else if (this.props.linkPreview === "Omotebike") {
      return (
        <div className="content_img">
          <img
            preload="auto"
            className="img__img"
            src={gifOmoteBike}
            alt="Omotebike Project"
          />
          <div className="text_img">
            <p>{this.props.text.omotebike}</p>
          </div>
        </div>
      );
    } else if (this.props.linkPreview === "Promptopia") {
      return (
        <div className="content_img">
          <img
            preload="auto"
            className="img__img"
            src={gifPromptopia}
            alt="Promptopia Project"
          />
          <div className="text_img">
            <p>{this.props.text.promptopia}</p>
          </div>
        </div>
      );
    } else if (this.props.linkPreview === "FacetoFace") {
      return (
        <div className="content_img">
          <img
            preload="auto"
            className="img__img"
            src={gifFaceToFace}
            alt="FacetoFace Project"
          />
          <div className="text_img">
            <p>{this.props.text.facetoface}</p>
          </div>
        </div>
      );
    } else if (this.props.linkPreview === "Omotesando") {
      return (
        <div className="content_img">
          <img
            preload="auto"
            className="img__img"
            src={gifOmotesando}
            alt="Omotesando Project"
          />
          <div className="text_img">
            <p>{this.props.text.omotesando}</p>
          </div>
        </div>
      );
    } else if (this.props.linkPreview === "Robofriends") {
      return (
        <div className="content_img">
          <img
            preload="auto"
            className="img__img"
            src={gifRobofriends}
            alt="Robofriends Project"
          />
          <div className="text_img">
            <p>{this.props.text.robofriends}</p>
          </div>
        </div>
      );
    } else if (this.props.linkPreview === "BackgroundGenerator") {
      return (
        <div className="content_img">
          <img
            preload="auto"
            className="img__img"
            src={gifBG}
            alt="Background Generator Project"
          />
          <div className="text_img">
            <p>{this.props.text.backgroundGenerator}</p>
          </div>
        </div>
      );
    } else if (this.props.linkPreview === "Portfolio") {
      return (
        <div className="content_img">
          <img
            preload="auto"
            className="img__img"
            src={gifPorfolio}
            alt="Portfolio Project"
          />
          <div className="text_img">
            <p>{this.props.text.portfolio}</p>
          </div>
        </div>
      );
    }
  }
}

export default PreviewProject;
