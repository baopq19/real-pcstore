import React, { useState } from 'react';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

export default function InputPassword(props) {
	const [showPassword, setShowPassword] = useState(false);
	const iconStyle = {
		color: '#818CF8',
		fontSize: '20px',
	};

	//split props to add_class hand the others
	const { add_class, ...restProps } = props;

	return (
		<div className='relative'>
			<input
				className={`input pr-12 ${add_class}`}
				type={!showPassword ? 'password' : 'text'}
				{...restProps}
			/>
			<span
				className='absolute text-gray-200 text-xs right-2 bottom-2.5 cursor-pointer'
				onClick={() => {
					setShowPassword(!showPassword);
				}}>
				{!showPassword ? (
					<EyeFilled style={iconStyle} />
				) : (
					<EyeInvisibleFilled style={iconStyle} />
				)}
			</span>
		</div>
	);
}
