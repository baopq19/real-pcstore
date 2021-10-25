import React from 'react';

export function SuccessToast(props) {
	const { message } = props;
	return (
		<div className='bg-primary-700 py-2 px-4 text-white border-2 border-green-500 rounded-3xl'>
			{message}
		</div>
	);
}

export function ErrorToast(props) {
	const { message } = props;
	return (
		<div className='bg-primary-700 py-2 px-4 text-white border-2 border-red-500 rounded-3xl'>
			{message}
		</div>
	);
}
