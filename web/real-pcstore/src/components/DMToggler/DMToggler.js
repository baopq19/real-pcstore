import React, { useState } from 'react';
import { FireFilled, FireOutlined } from '@ant-design/icons';
import { DARK_MODE } from '../../util/Constant';

export default function DMToggler() {
	let currentMode = localStorage.getItem(DARK_MODE);
	const [dark, setIsDark] = useState(currentMode === 'dark' ? true : false);

	const handleToggle = () => {
		setIsDark(!dark);

		if (dark) localStorage.setItem(DARK_MODE, 'light');
		else localStorage.setItem(DARK_MODE, 'dark');
	};

	const iconStyle = {
		color: 'white',
		fontSize: '24px',
	};

	return (
		<div className='cursor-pointer' onClick={handleToggle}>
			{!dark ? (
				<FireOutlined style={iconStyle} />
			) : (
				<FireFilled style={iconStyle} />
			)}
		</div>
	);
}
