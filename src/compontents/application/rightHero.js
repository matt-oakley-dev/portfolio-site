import React from "react";
import { useState } from "react";

import Home from "../sections/home"
import Contact from "../sections/contact";
import Articles from "../sections/articles";
import ChatGPT from "../sections/chatgpt";

export default function RightHero() {
	const [currentPage, setCurrentPage] = useState('home');

	return (
		<div className='app-half'>
			<div className='content-container mb-60'>
				<div class="nav">
					<ul>
						<li onClick={(e) => setCurrentPage('home')} className={ currentPage === 'home' ? "main-nav-active" : ''}>Home</li>
						<li onClick={(e) => setCurrentPage('articles')} className={ currentPage === 'articles' ? "main-nav-active" : ''}>Articles</li>
						<li onClick={(e) => setCurrentPage('chatgpt')} className={ currentPage === 'chatgpt' ? "main-nav-active" : ''}>ChatGPT</li>
					</ul>
				</div>
			</div>

			{currentPage === 'home' && (
                <Home/>
            )}

			{currentPage === 'articles' && (
                <Articles/>
            )}

			{currentPage === 'chatgpt' && (
                <ChatGPT/>
            )}
		</div>
  	)
}
