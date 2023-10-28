import React from "react";
import NavButton from "./NavButton";
import "./NavBar.css";
import ResumeENG from "../img/ResumeENG.pdf";
import ResumeJAP from "../img/ResumeJAP.pdf";
import Language from "./Language";

function NavBar(props) {
  const { lang, handleChangeLanguage, text } = props;
  return (
    <div className="navbar">
      <NavButton link={"AboutMe"} text={text.aboutMe} />
      <NavButton link={"Projects"} text={text.projects} />
      <NavButton link={"Contact"} text={text.contact} />
      {lang === "en" || lang === "fr" ? (
        <a href={ResumeENG} download target="_blank" rel="noreferrer">
          {text.resume}
        </a>
      ) : (
        <a href={ResumeJAP} download target="_blank" rel="noreferrer">
          {text.resume}
        </a>
      )}
      <Language
        currentLanguage={lang}
        onChangeLanguage={handleChangeLanguage}
      />
    </div>
  );
}

export default NavBar;
