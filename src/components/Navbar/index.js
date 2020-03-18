import React, { useState } from 'react';
import './style.css';

export default function Navbar () {
	const [
		search,
		setSearch
	] = useState(false);

	const submitSearch = e => {
		e.preventDefault();
		alert('Searched');
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
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>About us</a>
				</li>
				<li>
					<a href='#'>Posts</a>
				</li>
				<li>
					<a href='#'>Contact Us</a>
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
