import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';

function Hero () {
	return (
		<div>
			<Card>
				<div className='logo-space'>
					<Logo />
				</div>
				<Navbar />
			</Card>
		</div>
	);
}

export default Hero;
