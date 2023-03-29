import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ThreadResponse({content}) {
	return (
		<div className="chatGPTResponse">
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
  	)
}