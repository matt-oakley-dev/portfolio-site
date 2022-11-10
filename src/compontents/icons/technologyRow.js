import wordpress from '../../images/social-media/wordpress.svg';
import php from '../../images/technologies/php.svg';
import aws from '../../images/technologies/aws.svg';
import database from '../../images/technologies/database.svg';
import javascript from '../../images/technologies/javascript.svg';
import git from '../../images/technologies/git.svg';

import '../../scss/icons.scss';

export default function technologyRow() {
    return (
        <div className='social-media-row justify-content-left'>
            <img src={php} className="tech-media-icon" alt="php logo"/>
            <img src={aws} className="tech-media-icon" alt="aws logo"/>
            <img src={javascript} className="tech-media-icon" alt="javascript logo"/>
            <img src={database} className="tech-media-icon" alt="database logo"/>
            <img src={wordpress} className="tech-media-icon" alt="wordpress logo"/>
            <img src={git} className="tech-media-icon" alt="git logo"/>
        </div>
    );
}