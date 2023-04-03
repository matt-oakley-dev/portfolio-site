import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import openai from '../../images/chatgpt/openai.svg';
import heart from '../../images/chatgpt/heart.svg';

export default function ThreadResponse({content}) {
	const saveTofavourites = (event) => {
		console.log('save to favourites');
	}

	return (
		<div className="chatGPTResponse">
			<div className="content-parent">
				<img src={openai} className="chatgpt-thread-icon"  alt="chatgpt logo"/>
				<div className="chatGPTContent">
					<ReactMarkdown>
						{content}
					</ReactMarkdown>
				</div>
			</div>
			<div>
				<img src={heart} className="heart-thread-icon" onClick={saveTofavourites} alt="chatgpt logo"/>
			</div>
		</div>
  	)
}