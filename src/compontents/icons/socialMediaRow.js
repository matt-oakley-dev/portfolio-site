import linkedin from '../../images/social-media/linkedin.svg';
import wordpress from '../../images/social-media/wordpress.svg';
import mail from '../../images/social-media/mail.svg';
import git from '../../images/technologies/git.svg';

import '../../scss/icons.scss';

export default function socialMediaRow() {
	return (
        <div className='social-media-row'>
            <a href='https://www.linkedin.com/in/matt-oakley-2aabb6143/'><img src={linkedin} className="social-media-icon" alt="linkedin logo"/></a>
            <a href='https://profiles.wordpress.org/mattoakley/'><img src={wordpress} className="social-media-icon" alt="wordpress logo"/></a>
            <a href='mailto:matt.oakley@wearesmile.com'><img src={mail} className="social-media-icon" alt="mail logo"/></a>
            <a href='https://github.com/matt-oakley-dev/'><img src={git} className="social-media-icon" alt="git logo"/></a>
        </div>
  	)
}