import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Navbar from '../../components/Navbar';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';

function Post (props) {
	return (
		<section className='container'>
			{/* Pass props to get our data on our blogPost */}
			<BlogPost {...props} />
			<Sidebar />
		</section>
	);
}

export default Post;
