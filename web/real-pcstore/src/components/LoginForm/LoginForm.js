import React, { useState } from 'react';
import LoginSVG from '../../assets/icons/LoginSVG';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';

export default function LoginForm(props) {
	const [showPassword, setShowPassword] = useState(false);
	let history = useHistory();
	const onRegister = () => {
		history.push('/register');
	};

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validate: (values) => {
			console.log('validated', values);
		},
		onSubmit: (values) => {
			console.log('Submited', values);
		},
	});

	return (
		<div className='flex w-full sm:max-w-2xl mx-auto p-4 rounded bg-primary-800'>
			<div className='w-full md:w-7/12 p-2'>
				<p className='text-xl text-bold text-left text-white mb-4'>
					Athur! Shalom
				</p>
				<form onSubmit={formik.handleSubmit}>
					<div>
						<p className='input-gr-lb'>USERNAME OR EMAIL</p>
						<input
							className='input'
							name='username'
							value={formik.values.username}
							onChange={formik.handleChange}
						/>
					</div>
					<div className='mt-2 relative'>
						<p className='input-gr-lb'>PASSWORD</p>
						<input
							className='input'
							type={!showPassword ? 'password' : 'text'}
							name='password'
							value={formik.values.password}
							onChange={formik.handleChange}
						/>
						<span
							className='absolute text-gray-200 text-xs right-2 bottom-2.5 cursor-pointer'
							onClick={() => {
								setShowPassword(!showPassword);
							}}>
							{!showPassword ? 'Show' : 'Hide'}
						</span>
					</div>
					<a
						className='text-xs block -mt-0.75 text-blue-500 font-semibold'
						href='https://google.com'>
						Lost your password ?
					</a>
					<button
						className='w-full rounded text-white p-1.5 mt-4
								bg-indigo-500 text-center text-sm font-semibold'>
						Login
					</button>
					<p className='text-xs mt-1 text-gray-500'>
						Need an account?
						<span
							onClick={onRegister}
							className='ml-1 font-semibold text-blue-500 cursor-pointer'>
							Register
						</span>
					</p>
				</form>
			</div>
			<div className='hidden md:flex justify-center items-center p-4'>
				<LoginSVG className='w-full' />
			</div>
		</div>
	);
}