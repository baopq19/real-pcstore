import { useState, useEffect, useRef } from 'react';
import { CURRENT_USER } from '../../util/Constant';
import Link from 'next/link';
import DMToggler from './DMToggler';
import Logo from './Logo';
import dynamic from 'next/dynamic';

const DMTogglerCSR = dynamic(() => import('./DMToggler'), { ssr: false });

export default function Navbar(props) {
	let currentUser;
	if (typeof window !== 'undefined') {
		currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
	}

	const [collapse, setCollapse] = useState(false);
	const { active } = props;

	const renderLogin = () => {
		if (!currentUser)
			return (
				<Link href='/login' passHref>
					<a className='flex items-center mx-1.5'>Login</a>
				</Link>
			);
		//otherwise
		return (
			<span
				className='flex items-center mx-1.5 text-gray-300 cursor-pointer'
				onClick={handleLogout}>
				Logout
			</span>
		);
	};

	const navMenu = {
		items: [
			{ text: 'Home', path: '/' },
			{ text: 'Build PC', path: '/' },
			{ text: 'Your storage', path: '/' },
		],

		render: function () {
			return this.items.map((item, index) => {
				let activeClass = '';
				if (active === item.text) activeClass = 'active';

				return (
					<li
						className={`mx-1.5 lg:mx-4 flex items-center py-1.5 lg:p-0 ${activeClass}`}
						key={index}>
						<a href={item.path}>{item.text}</a>
					</li>
				);
			});
		},
	};

	const handleLogout = () => {
		localStorage.removeItem(CURRENT_USER);
		window.location.reload();
	};

	return (
		<div className='bg-red-600 dark:bg-blue-600'>
			<div className='flex flex-wrap p-2 lg:flex-nowrap'>
				<div className='flex w-full lg:w-2/12'>
					<div className='flex items-center justify-center w-10/12 ml-4 lg:justify-start lg:ml-0 lg:w-full'>
						<Logo />
					</div>
					{/* Collapse burger only display when break lg */}
					<div className='flex items-center justify-end w-2/12 d-block lg:hidden'>
						<div
							className='mr-1.5 cursor-pointer'
							onClick={() => {
								setCollapse(!collapse);
							}}>
							<div className='w-6 h-1 mb-1 bg-white rounded' />
							<div className='w-6 h-1 mb-1 bg-white rounded' />
							<div className='w-6 h-1 bg-white rounded' />
						</div>
					</div>
				</div>
				<div
					className={`flex flex-col-reverse w-full lg:max-h-full lg:flex-row lg:w-10/12
					transition-all duration-500 ease-in overflow-hidden
					
					${!collapse ? 'max-h-0' : 'max-h-44 mt-2'}`}>
					<div className='w-12/12 lg:w-10/12'>
						<ul className='flex flex-col justify-center h-full mt-2 text-white lg:flex-row lg:mt-0'>
							{navMenu.render()}
						</ul>
					</div>
					<div className='flex flex-col lg:flex-row lg:justify-end lg:w-2/12'>
						<div
							className='lg:flex lg:items-center lg:justify-center lg:mr-8 lg:mb-0
										mb-2 ml-1.5'>
							<DMTogglerCSR />
						</div>
						<div className='flex h-full font-semibold text-gray-200 lg:justify-end item-center'>
							{renderLogin()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
