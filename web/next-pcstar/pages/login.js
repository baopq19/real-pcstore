import React from 'react';
import LoginForm from '../components/LoginForm';
import { APPEARANCE, DARK_MODE } from '../util/Constant';

export default function Login() {
	let appearance;
	let backgroundImg = 'url("./images/LoginBG.jpg")';
	if (typeof window !== 'undefined') {
		appearance = localStorage.getItem(APPEARANCE);
	}
	if (appearance === DARK_MODE)
		backgroundImg = 'url("./images/DarkLoginBG.png")';
	let styles = {
		backgroundImage: backgroundImg,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'norepeat',
	};

	return (
		<div style={styles}>
			<div className='relative flex items-center min-h-screen mx-auto sm:container'>
				<div className='absolute text-xl font-semibold transform -translate-x-1/2 sm:hidden left-1/2 top-4'>
					Real-PCStore
				</div>
				<LoginForm />
			</div>
		</div>
	);
}
