import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

export default function Register(props) {
	return (
		<div
			style={{
				backgroundImage: 'url("./images/loginBG.png")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'norepeat',
			}}>
			<div className='sm:container mx-auto min-h-screen flex items-center'>
				<RegisterForm />
			</div>
		</div>
	);
}
