import React from "react";
import { useState } from "react";

import wordpress from '../../images/social-media/wordpress.svg';
import php from '../../images/technologies/php.svg';
import aws from '../../images/technologies/aws.svg';
import database from '../../images/technologies/database.svg';
import javascript from '../../images/technologies/javascript.svg';
import git from '../../images/technologies/git.svg';
import ExperienceRow from "./experienceRow";

import '../../scss/icons.scss';

export default function TechnologyRow() {
    const [selectedTechnology, setSelectedTechnology] = useState('php');

    const handleTechnologySelect = (e, technologyKey) => {
        var cusid_ele = document.getElementsByClassName('highlight-border-bottom');
        for (var i = 0; i < cusid_ele.length; ++i) {
            document.getElementById(cusid_ele[i].id).classList.remove('highlight-border-bottom')
        }

        document.getElementById(e.target.id).classList.add('highlight-border-bottom')
        setSelectedTechnology(technologyKey);
    }

    return (
        <>
            <div className='social-media-row justify-content-left'>
                <img id="php-id" onClick={(e) => handleTechnologySelect(e, 'php')} src={php} className="tech-media-icon highlight-border-bottom" alt="php logo"/>
                <img id="aws-id" onClick={(e) => handleTechnologySelect(e, 'aws')} src={aws} className="tech-media-icon"  alt="aws logo"/>
                <img id="js-id" onClick={(e) => handleTechnologySelect(e, 'js')} src={javascript} className="tech-media-icon" alt="javascript logo"/>
                {/* <img onClick={() => handleTechnologySelect('database')} src={database} className="tech-media-icon" alt="database logo"/> */}
                <img id="wordpress-id" onClick={(e) => handleTechnologySelect(e, 'wordpress')} src={wordpress} className="tech-media-icon" alt="wordpress logo"/>
                <img id="git-id" onClick={(e) => handleTechnologySelect(e, 'git')} src={git} className="tech-media-icon" alt="git logo"/>
            </div>

            {selectedTechnology && (
                <ExperienceRow techKey={selectedTechnology}/>
            )}
        </>
    );
}