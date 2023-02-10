import ButtonLink from "../button/buttonLink"

export default function Contact() {
	return (
		<div>
			<div className='content-container mb-60'>
				<h1 className='has-third-color'>Get in contact</h1>
				<p className='mb-40'>Have a project in mind? Want to ask a question?</p>
				<ButtonLink label={"Contact Me"} href={'https://www.linkedin.com/in/matt-oakley-2aabb6143/'} classes={"justify-content-left mt-10"}/>
			</div>
		</div>
  	)
}
