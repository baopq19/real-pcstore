import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router';
import { ErrorToast, SuccessToast } from '../CustomToast/CustomToast';

export default function RegisterForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState('');
	const notify = () =>
		toast.custom(<ErrorToast message='Success, welcome to the family.' />);

	let history = useHistory();
	const onLogin = () => {
		history.push('/login');
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
		validate: (values) => {
			console.log('Validating', values);
		},
		onSubmit: (values) => {
			if (values.password !== confirmPassword)
				return alert('Password confirm does not correct');
			console.log('Submited', values);
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
								bg-indigo-500 text-center text-sm font-semibold'>
						Create
					</button>
					<p className='text-xs mt-1 text-gray-500'>
						Got ya account?
						<span
							onClick={() => {
								// onLogin();
								notify();
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
