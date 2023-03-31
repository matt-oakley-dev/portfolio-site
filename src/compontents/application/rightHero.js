import React from "react";
import { useState } from "react";

import Home from "../sections/home"
import Contact from "../sections/contact";
import Articles from "../sections/articles";
import ChatGPT from "../sections/chatgpt/chatgpt";
import AccessToken from "../sections/chatgpt/accessToken";

export default function RightHero() {
	const [currentPage, setCurrentPage] = useState('home');

	return (
		<div className='app-half app-half-right'>
			<div class="nav">
				<ul>
					<li onClick={(e) => setCurrentPage('home')} className={ currentPage === 'home' ? "main-nav-active" : ''}>Home</li>
					<li onClick={(e) => setCurrentPage('articles')} className={ currentPage === 'articles' ? "main-nav-active" : ''}>Articles</li>
					<li onClick={(e) => setCurrentPage('chatgpt')} className={ currentPage === 'chatgpt' ? "main-nav-active" : ''}>ChatGPT</li>
					<li onClick={(e) => setCurrentPage('contact')} className={ currentPage === 'contact' ? "main-nav-active" : ''}>Contact</li>
				</ul>
			</div>

			{currentPage === 'home' && (
                <Home/>
            )}

			{currentPage === 'articles' && (
                <Articles/>
            )}

			{currentPage === 'chatgpt' && (
                <AccessToken/>
            )}

			{currentPage === 'contact' && (
                <Contact/>
            )}
		</div>
  	)
}
