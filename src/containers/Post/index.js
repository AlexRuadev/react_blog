import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Navbar from '../../components/Navbar';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
import Layout from '../../components/Layout';

function Post (props) {
	return (
		<div>
			<Layout>
				{/* Pass props to get our data on our blogPost */}
				<BlogPost {...props} />{' '}
			</Layout>
		</div>
	);
}

export default Post;
