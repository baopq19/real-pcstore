/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { APPEARANCE, DARK_MODE, LIGHT_MODE } from '../../util/Constant';

export default function DMToggler() {
	let userAppearance;
	let htmlEle;
	if (typeof window !== 'undefined') {
		userAppearance = localStorage.getItem(APPEARANCE);
		htmlEle = document.documentElement;
	}
	const [appearance, setAppearance] = useState(`${userAppearance}`); //Create state with appearance in local storage

	const handleToggle = () => {
		htmlEle.classList.toggle('dark');
		if (appearance === LIGHT_MODE) {
			localStorage.setItem(APPEARANCE, DARK_MODE);
			setAppearance(DARK_MODE);
		} else {
			localStorage.setItem(APPEARANCE, LIGHT_MODE);
			setAppearance(LIGHT_MODE);
		}
	};

	const renderToogle = () => {
		return appearance === LIGHT_MODE ? (
			<span className='material-icons' style={{ fontSize: '1.5rem' }}>
				dark_mode
			</span>
		) : (
			<span className='material-icons' style={{ fontSize: '1.5rem' }}>
				light_mode
			</span>
		);
	};

	return (
		<div
			className='flex items-center text-white cursor-pointer select-none'
			onClick={handleToggle}>
			{renderToogle()}
		</div>
	);
}
