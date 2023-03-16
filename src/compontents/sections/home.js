import TechnologyRow from "../icons/technologyRow"
import IntegrationRow from "../icons/integrationRow"
import ButtonLink from "../button/buttonLink"

export default function Home() {
	return (
		<div>
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

			<div className='content-container cta mt-40 mb-40'>
				<h1 className=''>I make complex developments and integrations <span className='has-secondary-color'>simple.</span></h1>
			</div>

			<div className='content-container'>
				<h1 className='has-third-color'>What systems have I integrated with?</h1>
				<IntegrationRow/>
			</div>
		</div>
  	)
}
