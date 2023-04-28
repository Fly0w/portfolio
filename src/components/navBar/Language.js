import React, { Component } from 'react';
import { FaGlobe  } from "react-icons/fa";

class Language extends Component {
    render(){
        const { lang, onChangeLanguage } = this.props;

        function handleChange(event) {
            onChangeLanguage(event.target.value);
        }
    
        return (
        <div>
        <label className="iconLang" htmlFor="language-select"><FaGlobe /></label>
        <select
            id="language-select"
            value={lang}
            onChange={handleChange}
        >
            <option value="en">English</option>
            <option value="jp">日本語</option>
            <option value="fr">Français</option>
        </select>
        </div>
        );
    }}

export default Language;
