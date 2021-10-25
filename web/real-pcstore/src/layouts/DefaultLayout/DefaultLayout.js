import React, { Fragment } from 'react';
import Footer from '../../components/shared/Footer/Footer';
import Navbar from '../../components/shared/Navbar/Navbar';

export default function DefaultLayout(props) {
	return (
		<Fragment>
			<Navbar active={props.active} />
			{props.children}
			<Footer />
		</Fragment>
	);
}
