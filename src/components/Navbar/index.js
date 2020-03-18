import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default function Navbar () {
	const [
		search,
		setSearch
	] = useState(false);

	const submitSearch = e => {
		e.preventDefault();
	};

	// We set setSearch function to True while the function is triggered (on searchIcon image click)
	const openSearch = () => {
		setSearch(true);
	};

	// our searchClass const : if search is true, add active class, else not
	const searchClass = search ? 'searchInput active' : 'searchInput';

	return (
		<div className='navbar'>
			<ul className='navbarMenu'>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/about-us'>About us</NavLink>
				</li>
				<li>
					<NavLink to='/post'>Posts</NavLink>
				</li>
				<li>
					<NavLink to='/contact-us'>Contact Us</NavLink>
				</li>
			</ul>
			<div className='search'>
				<form className='searchForm' onSubmit={submitSearch}>
					<input type='text' className={searchClass} placeholder='Search...' />
					<img
						onClick={openSearch}
						className='searchIcon'
						src={require('../../assets/icons/icon_search_32x32.png')}
						alt='Search'
					/>
				</form>
			</div>
		</div>
	);
}
