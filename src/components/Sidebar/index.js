import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

function Sidebar () {
	const [
		posts,
		setPosts
	] = useState([]);

	// we need to past post as a second parameter for performance, so it loads only when the post changes
	useEffect(
		() => {
			// Get our post if our find post.id match with postId
			const posts = blogPost.data;
			setPosts(posts);
		},
		[
			posts
		]
	);

	return (
		<div className='sidebarContainer'>
			{/* To apply style directly on our components, we need to pass ...props in our card component */}
			<Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
				<div className='cardHeader'>
					<span>About Me</span>
				</div>
				<div className='profileImageContainer'>
					<img src={require('../../assets//images/man-image.jpg')} alt='Me' />
				</div>
				<div className='cardBody'>
					<p className='personalBio'>
						My name is Alex, I'm a developer Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laudantium eligendi laborum amet molestiae dolore ab recusandae ex delectus, repellat beatae
						sapiente.
					</p>
				</div>
			</Card>

			<Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
				<div className='cardHeader'>
					<span>Social Network</span>
				</div>
			</Card>

			<Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
				<div className='cardHeader'>
					<span>Recent Posts</span>
				</div>
				<div className='recentPosts'>
					{/* map to loop on our posts array, declared at the beginning of our funtion */}
					{posts.map(post => {
						return (
							<NavLink key={post.id} to={`/post/${post.slug}`}>
								<div className='recentPost'>
									<h3 className='recentPostTitle'>{post.blogTitle}</h3>
									<span className='datePost'>
										<img
											src={require('../../assets/icons/icon_time_20x20.png')}
											alt='Time icon'
										/>{' '}
										{post.postedOn}
									</span>
								</div>
							</NavLink>
						);
					})}
				</div>
			</Card>
		</div>
	);
}

export default Sidebar;
