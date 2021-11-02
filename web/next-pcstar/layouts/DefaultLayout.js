import React, { Fragment } from 'react';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

export default function DefaultLayout(props) {
	return (
		<Fragment>
			<Navbar active={props.active} />
			{props.children}
			<Footer />
		</Fragment>
	);
}
