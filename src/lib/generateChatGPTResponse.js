const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY      = process.env.REACT_APP_CHATGPT_KEY;

const generateChatGPTResponse = async (prompts) => {
	const response = await fetch(API_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${API_KEY}`,
		},
		body: JSON.stringify({
			"model": "gpt-3.5-turbo",
			"messages": prompts
		}),
	});

	if ( ! response.ok ) {
		throw new Error(`API request failed with status ${response.status}`);
	}

	const data = await response.json();

	return data.choices[0].message.content;
};

export default generateChatGPTResponse;