import React from 'react';

export default function Footer() {
	return (
		<div>
			<div className='py-6 text-xs font-semibold text-center text-gray-100 bg-gray-800'>
				<p>© Pham Bao - 2021</p>
				<p>
					Contact for work:{' '}
					<a href='tel:+84879246503' className='text-indigo-400'>
						0879246503{' '}
					</a>
					-
					<a href='mailto:baopq19@gmail.com' className='text-indigo-400'>
						{' '}
						baopq19@gmail.com
					</a>
				</p>
			</div>
		</div>
	);
}
