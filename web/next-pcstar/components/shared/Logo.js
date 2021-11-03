import React, { Fragment } from 'react';
import Link from 'next/link';

export default function Logo() {
	return (
		<Link href='/' passHref>
			<a className='text-xl font-bold text-white select-none'>PCStar</a>
		</Link>
	);
}
