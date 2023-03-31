import React, { useState } from 'react';
import generateChatGPTResponse from '../../lib/generateChatGPTResponse';
import ThreadPrompt from '../chatgpt/ThreadPrompt';
import ThreadResponse from '../chatgpt/ThreadResponse';

export default function ChatGPT() {
	const [inputText, setInputText] = useState('');
	const [loading, setLoading] = useState(false);
	const [prompts, setPromptsList] = useState([]);
	const [thread, setThread] = useState([]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true)
		prompts.push({"role": "user", "content": inputText})
		thread.push({"type": "prompt", "content": inputText})

		try {
			const response = await generateChatGPTResponse(prompts);

			thread.push({"type": "response", "content": response})
			setInputText('');
		} catch (error) {
			console.error(error);
		}

		setLoading(false)
		setThread(thread)
		setPromptsList(prompts)
	};

	return (
		<div className='content-container mb-60'>
			<div>
				{thread.map(thread => (
					<div key={thread.content}>
						{ thread.type === 'prompt' ? <ThreadPrompt content={thread.content} /> : <ThreadResponse content={thread.content}/> }
					</div>
				))}
				{ loading ? <p>Generating Content from ChatGPT...</p> : ''}
			</div>
			<form onSubmit={handleSubmit}>
				Enter your prompt.
				<textarea className='display-block' rows="4" cols="50" onChange={(event) => setInputText(event.target.value)} >
					{inputText}
				</textarea>
				<button className='button border-none' type="submit">Submit</button>
			</form>
		</div>
  	)
}
