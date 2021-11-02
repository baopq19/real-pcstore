import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
	return (
		<Link to='/'>
			<span className='text-xl font-bold text-white select-none'>
				Real-PCStore
			</span>
		</Link>
	);
}
