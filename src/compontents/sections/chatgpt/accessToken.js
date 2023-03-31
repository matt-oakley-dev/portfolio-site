import React, { useState } from 'react';
import ChatGPT from './chatgpt';

const token = process.env.REACT_APP_CHATGPT_ACCESS_CODE;

export default function AccessToken() {
	const [accessToken, setAccessToken] = useState('');
	const [warningMessage, setWarningMessage] = useState('');
	const [authenticated, setAuthenticated] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setAccessToken('')

		if ( accessToken === token ) {
			setAuthenticated(true);
		} {
			setWarningMessage('The access token is incorrect, please try again.')
		}

		setAccessToken('')
	};

	return (
		<>
		{ authenticated === true && <ChatGPT/> }
		{ authenticated === false && 
			<div className='content-container mb-60'>
				<form onSubmit={handleSubmit}>
					<div className='text-center'>
						<h3>Enter your access token</h3>
						<p>To gain access to my ChatGPT app you must have recieved a key from myself, to request a key you should contact me.</p>
						<input type="text" value={accessToken} onChange={(event) => setAccessToken(event.target.value)}/>
						<small className='display-block color-danger mb-10'>{warningMessage}</small>
						<button className='button border-none' type="submit">Submit</button>
					</div>
				</form>
			</div>
		}
		</>
  	)
}
