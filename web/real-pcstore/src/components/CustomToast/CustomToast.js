import React from 'react';

export function SuccessToast(props) {
	const { message } = props;
	return (
		<div className='px-4 py-2 text-white border-2 border-green-500 bg-primary-700 rounded-3xl'>
			{message}
		</div>
	);
}

export function ErrorToast(props) {
	const { message } = props;
	return (
		<div className='px-4 py-2 text-white border-2 border-red-500 bg-primary-700 rounded-3xl'>
			{message}
		</div>
	);
}
