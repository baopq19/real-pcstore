import React, { useState } from 'react';
import { CURRENT_USER } from '../../../util/Constant';
import DMToggler from '../../DMToggler/DMToggler';

export default function Navbar(props) {
	const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
	const [collapse, setCollapse] = useState(false);
	const { active } = props;

	const renderLogin = () => {
		if (!currentUser)
			return (
				<a className='flex items-center mx-1.5' href='/login'>
					Login
				</a>
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

		render: () => {
			return navMenu.items.map((item, index) => {
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
		<div className='bg-primary-800'>
			<div className='flex flex-wrap lg:flex-nowrap p-2'>
				<div className='w-full flex lg:w-2/12'>
					<div className='w-10/12 lg:w-full text-center lg:text-left'>
						<a
							href='/'
							className='text-white text-xl hover:text-red-500 
							transition-all duration-500 ml-1.5'>
							Real-PCShop
						</a>
					</div>
					{/* Collapse burger */}
					<div className='d-block w-2/12 lg:hidden flex justify-end items-center'>
						<div
							className='mr-1.5 cursor-pointer'
							onClick={() => {
								setCollapse(!collapse);
							}}>
							<div className='h-1 w-6 rounded mb-1 bg-white' />
							<div className='h-1 w-6 rounded mb-1 bg-white' />
							<div className='h-1 w-6 rounded bg-white' />
						</div>
					</div>
				</div>
				<div
					className={`flex flex-col-reverse w-full lg:max-h-full lg:flex-row lg:w-10/12
					transition-all duration-500 ease-in overflow-hidden
					
					${!collapse ? 'max-h-0' : 'max-h-44 mt-2'}`}>
					<div className='w-12/12 lg:w-10/12'>
						<ul
							className='flex h-full justify-center text-white
						flex-col lg:flex-row mt-2 lg:mt-0'>
							{navMenu.render()}
						</ul>
					</div>
					<div className='flex flex-col lg:flex-row lg:justify-end lg:w-2/12'>
						<div className='mb-2 ml-1 lg:mb-1 lg:mr-8'>
							<DMToggler />
						</div>
						<div
							className='flex h-full lg:justify-end item-center
						text-gray-200 font-semibold'>
							{renderLogin()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
