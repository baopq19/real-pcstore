import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { APPEARANCE, DARK_MODE } from '../../util/Constant';

export default function Register(props) {
	const appearance = localStorage.getItem(APPEARANCE);
	let backgroundImg = 'url("./images/LoginBG.jpg")';
	if (appearance === DARK_MODE)
		backgroundImg = 'url("./images/DarkLoginBG.png")';

	return (
		<div
			style={{
				backgroundImage: backgroundImg,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'norepeat',
			}}>
			<div className='sm:container mx-auto min-h-screen flex items-center relative'>
				<div className='absolute sm:hidden left-1/2 top-4 transform -translate-x-1/2 text-xl font-semibold'>
					Real-PCStore
				</div>
				<RegisterForm />
			</div>
		</div>
	);
}
