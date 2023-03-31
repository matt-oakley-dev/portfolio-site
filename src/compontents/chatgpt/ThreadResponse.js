import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import openai from '../../images/chatgpt/openai.svg';

export default function ThreadResponse({content}) {
	return (
		<div className="chatGPTResponse">
			<img src={openai} className="chatgpt-thread-icon"  alt="chatgpt logo"/>
			<ReactMarkdown>
				{content}
			</ReactMarkdown>
		</div>
  	)
}