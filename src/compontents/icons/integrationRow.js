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

export default function IntegrationRow() {
    return (
        <>
            <div className='social-media-row justify-content-left'>
                <img id="php-id"  src={php} className="tech-media-icon cursor-regular" alt="php logo"/>
                <img id="aws-id"  src={aws} className="tech-media-icon cursor-regular"  alt="aws logo"/>
                <img id="js-id"  src={javascript} className="tech-media-icon cursor-regular" alt="javascript logo"/>
                {/* <img onClick={() => handleTechnologySelect('database')} src={database} className="tech-media-icon" alt="database logo"/> */}
                <img id="wordpress-id" src={wordpress} className="tech-media-icon cursor-regular" alt="wordpress logo"/>
                <img id="git-id" src={git} className="tech-media-icon cursor-regular" alt="git logo"/>
            </div>
        </>
    );
}