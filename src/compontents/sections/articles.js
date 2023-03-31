import ReactMarkdown from 'react-markdown';
import ArticlesButton from "../button/articleButton";

import DeployToVercel from "../md-articles/deploy-to-vercel.md"
import CallingChatGPTAPI from "../md-articles/calling-chatgpt-api.md"

import { useState } from "react";

export default function Articles() {
	const [markdown, setMarkdown] = useState('');

	const handleMarkDownSelect = (e, file) => {
		switch(file) {
			case "deploy-to-vercel":
				fetch(DeployToVercel).then(res => res.text()).then(text => setMarkdown({ text }));
				break;
			case "use-chatgpt-api":
				fetch(CallingChatGPTAPI).then(res => res.text()).then(text => setMarkdown({ text }));
				break;
		}

		document.getElementById('article-selector-container').classList.add('hidden');
		document.getElementById('article-content-container').classList.remove('hidden');
    }

	const handleViewArticlesList = (e) => {
		document.getElementById('article-selector-container').classList.remove('hidden');
		document.getElementById('article-content-container').classList.add('hidden');
    }

	return (
		<div>
			<div className='content-container mb-60  mt-60'>
				<div id="article-selector-container">
					<h1 className='has-third-color'>Articles</h1>
					<ArticlesButton
						title={'Calling the ChatGPT API in React'}
						excerpt={"This article explains how to call upon the ChatGPT API and make requests using react."}
						date={"1st April 2023"}
						onClick={(e) => handleMarkDownSelect(e, 'use-chatgpt-api')}
					/>

					<ArticlesButton
						title={'Deploy your NextJs / React app to Vercel'}
						excerpt={"If you're looking to deploy an app, Vercel is a great option. Vercel is a cloud platform for static sites and serverless functions. It's easy to use and has great performance. In this article, we'll walk through the steps to deploy your app to Vercel."}
						date={"19th March 2023"}
						onClick={(e) => handleMarkDownSelect(e, 'deploy-to-vercel')}
					/>
				</div>

				<div id="article-content-container" className='hidden'>
					<span className="link" onClick={(e) => handleViewArticlesList(e)}>Back...</span>
					<br/>
					<div className='markdown'>
						<ReactMarkdown>{markdown.text}</ReactMarkdown>
					</div>
				</div>
			</div>
		</div>
  	)
}
