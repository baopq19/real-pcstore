import React, { useState } from 'react';
import LoginSVG from '../../icons/LoginSVG';
import { useFormik } from 'formik';
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Login() {
	const inputSharedConfig = {
		variant: 'outlined',
		size: 'small',
		margin: 'dense',
		fullWidth: true,
		onChange: (e) => {
			formik.setFieldValue(e.target.name, e.target.value);
		},
	};

	const [showPassword, setShowPassword] = useState(false);

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
		<div
			className='sm:container mx-auto min-h-screen
					flex items-center bg-red-500'>
			<div className='flex w-full sm:max-w-2xl mx-auto p-4 rounded bg-green-500'>
				<div className='w-full md:w-7/12 p-2'>
					<p className='text-xl text-bold text-left mb-2'>Athur! Shalom</p>
					<form onSubmit={formik.handleSubmit}>
						<TextField
							name='username'
							label='Username'
							{...inputSharedConfig}
						/>
						<FormControl {...inputSharedConfig}>
							<InputLabel htmlFor='outlined-adornment-password'>
								Password
							</InputLabel>
							<OutlinedInput
								id='outlined-adornment-password'
								name='password'
								type={showPassword ? 'text' : 'password'}
								value={formik.values.password}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={() => {
												console.log('aaa');
												setShowPassword(!showPassword);
											}}
											edge='end'>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label='Password'
							/>
						</FormControl>
						<a
							className='text-xs block -mt-0.75 text-blue-500 font-semibold'
							href='https://google.com'>
							Lost your password? Find it on google
						</a>
						<div className='mt-4'>
							<Button variant='contained' fullWidth type='submit'>
								Login
							</Button>
						</div>
						<p className='text-xs mt-1 text-gray-500'>
							Need an account?
							<a className='ml-1 font-semibold text-blue-500' href='/register'>
								Register
							</a>
						</p>
					</form>
				</div>
				<div className='hidden md:flex justify-center items-center p-4'>
					<LoginSVG className='w-full' />
				</div>
			</div>
		</div>
	);
}
