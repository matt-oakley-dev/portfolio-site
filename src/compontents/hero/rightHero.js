import TechnologyRow from "../icons/technologyRow"
import ButtonLink from "../button/buttonLink"

export default function rightHero() {
	return (
		<div className='app-half'>
			<div className='content-container mb-60'>
				<h1 className='has-third-color'>Who am I?</h1>
				<p>
					My name is Matthew Oakley and I am a backend PHP developer. I specialize in working on the Wordpress platform and I am proud to be part of the market-leading agency, wearesmile, based in Birmingham, UK.</p>
					<p>In my free time, you can find me indulging in my favorite activities such as grabbing a drink at the pub, hitting the golf course, or playing a game of football with my friends. When the weather takes a turn and the sun isn't shining, I enjoy exploring new tech stacks and pushing my limits as a developer. Join me on this journey of continuous growth and discovery!</p>
			</div>

			<div className='content-container'>
				<h1 className='has-third-color'>What are my technologies?</h1>
				<TechnologyRow/>
			</div>

			<div className='content-container mb-60'>
				<h1 className='has-third-color'>Get in contact</h1>
				<p className='mb-40'>Have a project in mind? Want to ask a question?</p>
				<ButtonLink label={"Contact Me"} href={'https://www.linkedin.com/in/matt-oakley-2aabb6143/'} classes={"justify-content-left mt-10"}/>
			</div>
		</div>
  	)
}
