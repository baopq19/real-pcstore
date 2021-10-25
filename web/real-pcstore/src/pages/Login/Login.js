import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Login(props) {
	return (
		<div
			style={{
				backgroundImage: 'url("./images/loginBG.png")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'norepeat',
			}}>
			<div className='sm:container mx-auto min-h-screen flex items-center'>
				<LoginForm />
			</div>
		</div>
	);
}
