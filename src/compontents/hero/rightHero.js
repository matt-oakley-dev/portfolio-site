import TechnologyRow from "../icons/technologyRow"
import ButtonLink from "../button/buttonLink"

export default function rightHero() {
	return (
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
