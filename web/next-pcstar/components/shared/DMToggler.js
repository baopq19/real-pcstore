/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
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

	return (
		<div className='text-white cursor-pointer' onClick={handleToggle}>
			{appearance === LIGHT_MODE ? 'Go Dark' : 'Turn light'}
		</div>
	);
}
