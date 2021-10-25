import React, { Fragment } from 'react';
import Navbar from '../../components/shared/Navbar/Navbar';

export default function DefaultLayout(props) {
	return (
		<Fragment>
			<Navbar active={props.active} />
			{props.children}
		</Fragment>
	);
}
