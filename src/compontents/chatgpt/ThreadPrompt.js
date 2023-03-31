import chat from '../../images/chatgpt/chat.svg';

export default function ThreadPrompt({content}) {
	return (
		<div className="chatGPTPrompt">
			<img src={chat} className="chatgpt-thread-icon"  alt="chatgpt logo"/>
			<p>{content}</p>
		</div>
  	)
}