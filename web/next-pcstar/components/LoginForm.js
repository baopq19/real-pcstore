import React from 'react';
import LoginSVG from '../assets/icons/LoginSVG';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useFormik } from 'formik';
import UserModel from '../models/UserModel';
import { authService } from '../services/AuthService';
import toast from 'react-hot-toast';
import { SuccessToast, ErrorToast } from '../components/shared/CustomToast';
import InputPassword from '../components/form/InputPassword';

export default function LoginForm(props) {
	const router = useRouter();
	const onRegister = () => {
		router.push('/register');
	};

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validate: (values) => {
			//validate
		},
		onSubmit: async (values) => {
			console.log('Submit', values);
			const user = new UserModel(values);
			try {
				const result = await authService.login(user);
				user.setAccessToken(result.data.accessToken);
				if (result.data?.success) {
					//SET CURRENT USER
					if (user.setCurrentUser()) {
						toast.custom(<SuccessToast message='Welcome, my man!' />);
						router.back();
					}
				}
			} catch (error) {
				console.error(error);
				const errorMessage = error.response?.message;
				if (errorMessage) {
					toast.custom(<ErrorToast message={error.response.message} />);
				}
			}
		},
	});

	return (
		<div className='flex items-center w-full min-h-screen p-4 mx-auto transition-all duration-500 bg-gray-100 rounded shadow-xl sm:max-w-2xl sm:min-h-0 dark:bg-gray-800'>
			<div className='w-full p-2 md:w-7/12'>
				<p className='mb-0 text-xl text-left text-black text-bold dark:text-white'>
					Hey, Look whos back!
				</p>
				<div className='mb-4 -mt-1 text-xs text-gray-400'>
					<Link href='/' passHref>
						<a className='cursor-pointer'>Im good, no login needed</a>
					</Link>
				</div>
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
					<div className='mt-2'>
						<p className='input-gr-lb'>PASSWORD</p>
						<InputPassword
							name='password'
							value={formik.values.password}
							onChange={formik.handleChange}
						/>
					</div>
					<a
						className='text-xs block -mt-0.75 text-blue-500 font-semibold select-none'
						href='https://google.com'>
						Lost your password ?
					</a>
					<button
						className='w-full rounded text-white p-1.5 mt-4 select-none
								bg-indigo-500 text-center text-sm font-semibold'
						type='submit'>
						Login
					</button>
					<p className='mt-1 text-xs text-gray-500'>
						Need an account?
						<span
							onClick={onRegister}
							className='ml-1 font-semibold text-blue-500 cursor-pointer'>
							Register
						</span>
					</p>
				</form>
			</div>
			<div className='items-center justify-center hidden p-4 md:flex'>
				<LoginSVG className='w-full' />
			</div>
		</div>
	);
}
