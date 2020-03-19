import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';

const Home = props => {
	const galleryHeight = 450;
	const galleryStyle = {
		height   : galleryHeight + 'px',
		overflow : 'hidden'
	};
	// TODO review styling for this container, home page
	const sideImageHeight = galleryHeight / 3;

	return (
		<div>
			<Card>
				<div className='galleryPost' style={{ galleryStyle }}>
					<section className='mostPopular' style={{ width: '70%' }}>
						<div>
							<img
								src={require('../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg')}
								alt='image'
							/>
						</div>
					</section>
					<section className='lessPopular ' style={{ width: '30%' }}>
						<div style={{ height: `${sideImageHeight}px` }}>
							<img
								src={require('../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg')}
								alt='image'
							/>
						</div>

						<div style={{ height: `${sideImageHeight}px` }}>
							<img
								src={require('../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg')}
								alt='image'
							/>
						</div>

						<div style={{ height: `${sideImageHeight}px` }}>
							<img
								src={require('../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg')}
								alt='image'
							/>
						</div>
					</section>
				</div>
			</Card>
		</div>
	);
};

export default Home;
