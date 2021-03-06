import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router';
import UserModel from '../../models/UserModel';
import { ErrorToast, SuccessToast } from '../CustomToast/CustomToast';
import { authService } from '../../services/AuthService';
import InputPassword from '../InputPassword/InputPassword';

export default function RegisterForm() {
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
		<div
			className='flex items-center w-full min-h-screen p-4 mx-auto transition-all duration-500 bg-gray-100 rounded shadow-xl sm:max-w-lg sm:min-h-0 dark:bg-gray-800'>
			<div className='w-full p-2'>
				<p className='mb-4 text-xl text-center text-black text-bold dark:text-white'>
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
					<div className='mt-2'>
						<p className='input-gr-lb'>PASSWORD</p>
						<InputPassword
							name='password'
							value={formik.values.password}
							onChange={formik.handleChange}
						/>
					</div>
					<div className='relative mt-2'>
						<p className='input-gr-lb'>CONFIRM PASSWORD</p>
						<InputPassword
							name='confirmPassword'
							value={confirmPassword}
							onChange={handleConfirmPassword}
						/>
					</div>
					<div className='mt-2'>
						<p className='input-gr-lb'>EMAIL</p>
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
					<p className='mt-1 text-xs text-gray-500'>
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
