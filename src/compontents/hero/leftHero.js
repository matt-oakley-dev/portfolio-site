import logo from '../../images/profile-picture.jpeg';

import SocialMediaRow from '../icons/socialMediaRow';

export default function leftHero() {
	return (
		<div className="app-half has-primary-bg has-white-text">
			<div className='profile-image-border'>
				<img src={logo} className="profile-image-large" alt="profile"/>
			</div>
			<h1>I'm <span className='has-secondary-color'>Matthew.</span></h1>
			<h3>I am a PHP Wordpress Developer working remotely in the UK.</h3>

			<SocialMediaRow/>
		</div>
  	)
}
