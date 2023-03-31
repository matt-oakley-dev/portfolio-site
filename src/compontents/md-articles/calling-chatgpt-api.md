![chatgpt](https://imageio.forbes.com/specials-images/imageserve/6390c9baf47f8fba2508ccf8/OpenAI-And-ChatGTP/0x0.jpg?crop=3543,1992,x0,y110,safe&height=399&width=711&fit=bounds)

# Calling the ChatGPT API in React

To call the ChatGPT API endpoint you can use the following JS code, this endpoint takes an array of prompts, it will always answer the last prompt but use the historic prompts as context. In this example the question is "Now in python?" but the language model has already answered / uses as context: Can you show me how to make an api call in javascript?"

To obtain an API key you must [create an API key](https://platform.openai.com/), you must also set your billing details for requests to authenticate, otherwise you are returned at 429.

See the code:

```
const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY      = process.env.REACT_APP_CHATGPT_KEY;

const prompts = [
    {"type": "prompt", "content": "Can you show me how to make an api call in javascript?"},
    {"type": "prompt", "content": "Now in python?"}
]

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
```