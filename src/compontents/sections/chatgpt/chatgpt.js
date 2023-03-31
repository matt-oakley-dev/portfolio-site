import React, { useState } from 'react';
import generateChatGPTResponse from '../../../lib/generateChatGPTResponse';
import ThreadPrompt from '../../chatgpt/ThreadPrompt';
import ThreadResponse from '../../chatgpt/ThreadResponse';
import Loader from '../../helpers/loader';

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

		setInputText('');

		try {
			const response = await generateChatGPTResponse(prompts);

			thread.push({"type": "response", "content": response})
		} catch (error) {
			console.error(error);
		}

		setLoading(false)
		setThread(thread)
		setPromptsList(prompts)
	};

	return (
		<div className='content-container mb-60'>
			<p>Below is a integration built for ChatGPT ready for ChatGPT 4. I built this because I could. Its actually useless.</p>
			<hr/>
			<div>
				<div className='min-h-page'>
					{thread.map(thread => (
						<div key={thread.content}>
							{ thread.type === 'prompt' ? <ThreadPrompt content={thread.content} /> : <ThreadResponse content={thread.content}/> }
						</div>
					))}
					<div className={`text-center ${ loading ? 'h-200' : ''}`}>
						{ loading ? <Loader/>: ''}
					</div>
				</div>
				<form onSubmit={handleSubmit}>
					Enter your prompt.
					<textarea value={inputText} id="promptTextArea" className='display-block' rows="4" cols="50" onChange={(event) => setInputText(event.target.value)} ></textarea>
					<button className='button border-none' type="submit">Submit</button>
				</form>
			</div>
		</div>
  	)
}
