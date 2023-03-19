
import '../../scss/articles.scss';

export default function ArticlesButton({title, excerpt, date, onClick}) {
	return (
		<div className='article-link' onClick={onClick}>
			<h3>{title}</h3>
			<p>{excerpt}</p>
			<small>{date}</small>
		</div>
  	)
}