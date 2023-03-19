import ButtonLink from "../button/buttonLink"
import SampleMD from "../md-articles/sample.md"
import ReactMarkdown from 'react-markdown';
import ArticlesButton from "../button/articleButton";

import { useState } from "react";

export default function Articles() {
	const [markdown, setMarkdown] = useState('');

	const handleMarkDownSelect = (e, file) => {
		console.log(file);
		if ( 'sample-md' === file ) {
			fetch(SampleMD).then(res => res.text()).then(text => setMarkdown({ text }));
			document.getElementById('article-selector-container').classList.add('hidden');
			document.getElementById('article-content-container').classList.remove('hidden');
		}
    }

	const handleViewArticlesList = (e) => {
		document.getElementById('article-selector-container').classList.remove('hidden');
		document.getElementById('article-content-container').classList.add('hidden');
    }

	return (
		<div>
			<div className='content-container mb-60'>
				<div id="article-selector-container">
					<h1 className='has-third-color'>Articles</h1>
					<ArticlesButton
						title={'Deploy your NextJs / React app to Vercel'}
						excerpt={"If you're looking to deploy an app, Vercel is a great option. Vercel is a cloud platform for static sites and serverless functions. It's easy to use and has great performance. In this article, we'll walk through the steps to deploy your app to Vercel."}
						date={"19th March 2023"}
						onClick={(e) => handleMarkDownSelect(e, 'sample-md')}
					/>
				</div>

				<div id="article-content-container" className='hidden'>
					<span className="link" onClick={(e) => handleViewArticlesList(e)}>Back...</span>
					<br/>
					<ReactMarkdown>{markdown.text}</ReactMarkdown>
				</div>
			</div>
		</div>
  	)
}
