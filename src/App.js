import logo from './images/profile-picture.jpeg';

import linkedin from './images/social-media/linkedin.svg';
import wordpress from './images/social-media/wordpress.svg';
import mail from './images/social-media/mail.svg';

import php from './images/technologies/php.svg';
import aws from './images/technologies/aws.svg';
import database from './images/technologies/database.svg';
import javascript from './images/technologies/javascript.svg';
import git from './images/technologies/git.svg';

import './App.css';

function App() {
  return (
	<div className="app">
		<div className="app-half has-primary-bg has-white-text">
			<div className='profile-image-border'>
				<img src={logo} className="profile-image-large" alt="profile"/>
			</div>
			<h1>I'm <span className='has-secondary-color'>Matthew.</span></h1>
			<h3>I am a PHP Wordpress Developer working remotely in the UK.</h3>

			<div className='social-media-row'>
				<a href='https://www.linkedin.com/in/matt-oakley-2aabb6143/'><img src={linkedin} className="social-media-icon" alt="linkedin logo"/></a>
				<a href='https://profiles.wordpress.org/mattoakley/'><img src={wordpress} className="social-media-icon" alt="wordpress logo"/></a>
				<a href='mailto:matt.oakley@wearesmile.com'><img src={mail} className="social-media-icon" alt="mail logo"/></a>
				<a href='https://github.com/matt-oakley-dev/'><img src={git} className="social-media-icon" alt="git logo"/></a>
			</div>
		</div>

		<div className='app-half'>
			<div className='content-container mb-60'>
				<h1 className='has-third-color'>Who am I?</h1>
				<p>Hi, my name is Matthew Oakley. I am a backend PHP developer working on the Wordpress platform. 
					I am based in birmingham in the UK and working for a market leading agency, <a href='https://www.wearesmile.com'>wearesmile.</a>
				</p>

				<p>
					Outside of work you may find me in the pub, on a golf course or playing football with my friends. In the winter (when the suns not shining) i like to experiment with new tech stacks and continue my growth as a developer.
				</p>
			</div>

			<div className='content-container'>
				<h1 className='has-third-color'>What are my technologies?</h1>
				<div className='social-media-row justify-content-left'>
					<img src={php} className="tech-media-icon" alt="php logo"/>
					<img src={aws} className="tech-media-icon" alt="aws logo"/>
					<img src={javascript} className="tech-media-icon" alt="javascript logo"/>
					<img src={database} className="tech-media-icon" alt="database logo"/>
					<img src={wordpress} className="tech-media-icon" alt="wordpress logo"/>
					<img src={git} className="tech-media-icon" alt="git logo"/>
				</div>
			</div>

			<div className='content-container mb-60'>
				<h1 className='has-third-color'>Get in contact</h1>
				<p className='mb-40'>Have a project in mind? Want to ask a question?</p>
				<a className='button mt-10 justify-content-left' href='https://www.linkedin.com/in/matt-oakley-2aabb6143/'>Contact Me</a>
			</div>
		</div>
	</div>
  );
}

export default App;
