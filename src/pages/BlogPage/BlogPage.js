import React from 'react';
import './BlogPage.css'
import BlogPreview from './components/BlogPreview/BlogPreview'

export default function BlogPage() {

	const blogs = [
		{
			blogName: 'What does your skin need?',
			blogImage: `${process.env.PUBLIC_URL}/assets/images/blog-1.png`,
			id: 1
		}, {
			blogName: 'How to choose the right skin care?',
			blogImage: `${process.env.PUBLIC_URL}/assets/images/blog-2.png`,
			id: 2
		}
	];

	const loadBlogs = (blogsArr) => {
		return (
			blogsArr
				.map(blog => <BlogPreview img={blog.blogImage} name={blog.blogName} key={blog.id} />)
		)
	}


	return (

		<div className="container">
			<div className="bp-content">
				<div className="bp-heading">
					<h1 className="bp-name main-text">EcoSnake blog</h1>
				</div>
				<div className="blogs-container">
					{loadBlogs(blogs)}
				</div>
			</div>
		</div>

	)

}