import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

function BlogPost (props) {
	const [
		post,
		setPost
	] = useState({
		id           : '',
		blogCategory : '',
		blogTitle    : '',
		slug         : '',
		postedOn     : '',
		author       : '',
		blogImage    : '',
		blogText     : ''
	});

	const [
		slug,
		setSlug
	] = useState('');

	// we need to past post as a second parameter for performance, so it loads only when the post changes
	useEffect(
		() => {
			// store our postId in a const. we have access to datas because we passed ...props in our Post component
			const slug = props.match.params.slug;
			// console.log(blogPost);

			// Get our post if our find post.id match with postId
			const post = blogPost.data.find(post => post.slug == slug);
			setPost(post);
			setSlug(slug);
		},
		[
			post,
			props.match.params.slug
		]
	);

	if (post.blogImage == '') return null;

	return (
		<div className='blogPostContainer'>
			<Card>
				<div className='blogHeader'>
					<span className='blogCategory'>{post.blogCategory}</span>
					<h2 className='postTitle'>{post.blogTitle}</h2>
					<span className='postedBy'>
						posted on {post.postedOn}, by {post.author}
					</span>
				</div>

				<div className='postImageContainer'>
					<img src={require('../../blogPostImages/' + post.blogImage)} alt='Post' />
				</div>

				<div className='postContent'>
					<h3>{post.blogTitle}</h3>
					<p>{post.blogText}</p>
				</div>
			</Card>
		</div>
	);
}

export default BlogPost;
