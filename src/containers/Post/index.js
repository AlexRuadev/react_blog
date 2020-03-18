import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Navbar from '../../components/Navbar';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';

function Post () {
	return (
		<section className='container'>
			<BlogPost />
			<Sidebar />
		</section>
	);
}

export default Post;
