
import '../../scss/button.scss';

export default function buttonLink({label, classes, href}) {
	return (
		<a className={classes + " button"} href={href}>{label}</a>
  	)
}