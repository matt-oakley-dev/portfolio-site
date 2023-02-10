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
    const [selectedTechnology, setSelectedTechnology] = useState('');

    const handleTechnologySelect = (technologyKey) => {
        if ( technologyKey === selectedTechnology ) {
            technologyKey = false;
        }

        console.log(technologyKey);

        setSelectedTechnology(technologyKey);
    }

    return (
        <>
            <div className='social-media-row justify-content-left'>
                <img onClick={() => handleTechnologySelect('php')} src={php} className="tech-media-icon" alt="php logo"/>
                <img onClick={() => handleTechnologySelect('aws')} src={aws} className="tech-media-icon"  alt="aws logo"/>
                <img onClick={() => handleTechnologySelect('js')} src={javascript} className="tech-media-icon" alt="javascript logo"/>
                {/* <img onClick={() => handleTechnologySelect('database')} src={database} className="tech-media-icon" alt="database logo"/> */}
                <img onClick={() => handleTechnologySelect('wordpress')} src={wordpress} className="tech-media-icon" alt="wordpress logo"/>
                <img onClick={() => handleTechnologySelect('git')} src={git} className="tech-media-icon" alt="git logo"/>
            </div>

            {selectedTechnology && (
                <ExperienceRow techKey={selectedTechnology}/>
            )}
        </>
    );
}