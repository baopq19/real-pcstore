import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router';
import UserModel from '../../models/UserModel';
import { ErrorToast, SuccessToast } from '../CustomToast/CustomToast';
import { authService } from '../../services/AuthService';

export default function RegisterForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState('');

	let history = useHistory();
	const onLogin = () => {
		history.goBack();
	};

	let handleConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
	};

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
			email: '',
		},
		validate: (values) => {},
		onSubmit: async (values) => {
			if (values.password !== confirmPassword)
				return alert('Password confirm does not correct');
			try {
				const user = new UserModel(values);
				const result = await authService.register(user);
				//success
				if (result.data?.success) {
					//SET CurrentUser success
					user.setAccessToken(result.data.accessToken);
					if (user.setCurrentUser()) {
						history.push('/');
						toast.custom(
							<SuccessToast
								message={'WELCOME, Let find you some badass gear!'}
							/>
						);
					}
				}
			} catch (error) {
				console.error(error.response);
				const errorMessage = error.response?.data?.message;
				if (errorMessage) {
					toast.custom(<ErrorToast message={errorMessage} />);
				}
			}
		},
	});

	return (
		<div className='flex w-full sm:max-w-lg mx-auto p-4 rounded bg-primary-800'>
			<div className='w-full p-2'>
				<p className='text-xl text-bold text-center text-white mb-4'>
					Create an account
				</p>
				<form onSubmit={formik.handleSubmit}>
					<div>
						<p className='input-gr-lb'>USERNAME</p>
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
							className='input pr-12'
							type={!showPassword ? 'password' : 'text'}
							name='password'
							value={formik.values.password}
							onChange={formik.handleChange}
						/>
						<span
							className='absolute text-gray-200 text-xs right-2 bottom-2 cursor-pointer'
							onClick={() => {
								setShowPassword(!showPassword);
							}}>
							{!showPassword ? 'Show' : 'Hide'}
						</span>
					</div>
					<div className='mt-2 relative'>
						<p className='input-gr-lb'>CONFIRM PASSWORD</p>
						<input
							className='input pr-12'
							type={!showPassword ? 'password' : 'text'}
							name='confirmPassword'
							value={confirmPassword}
							onChange={handleConfirmPassword}
						/>
						<span
							className='absolute text-gray-200 text-xs right-2 bottom-2 cursor-pointer'
							onClick={() => {
								setShowPassword(!showPassword);
							}}>
							{!showPassword ? 'Show' : 'Hide'}
						</span>
					</div>
					<div className='mt-2'>
						<p className='input-gr-lb'>Email</p>
						<input
							className='input'
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
						/>
					</div>
					<button
						className='w-full rounded text-white p-1.5 mt-4
								bg-indigo-500 text-center text-sm font-semibold'
						type='submit'>
						Create
					</button>
					<p className='text-xs mt-1 text-gray-500'>
						Got ya account?
						<span
							onClick={() => {
								onLogin();
							}}
							className='ml-1 font-semibold text-blue-500 cursor-pointer'>
							Login
						</span>
					</p>
				</form>
			</div>
		</div>
	);
}
