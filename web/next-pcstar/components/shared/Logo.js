import React from 'react';
import Link from 'next/link';

export default function Logo() {
	return (
		<Link href='/'>
			<span className='text-xl font-bold text-white select-none'>PCStar</span>
		</Link>
	);
}
