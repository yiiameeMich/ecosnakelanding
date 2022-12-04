import React from 'react';
import './blogpreview.css'

export default function BlogPreview ({img, name}) {

	return (
		<div className='blog-preview-container'>
			<div className='bp-preview-image-container'>
				<img src={img} alt="" className="bp-preview-image"/>
			</div>
			<div className="text-blog-preview-container">
				<h1 className="blog-preview-name main-text">
					{name}
				</h1>
				<button className="see-more-blog-btn primary-text">Read full article</button>
			</div>
		</div>
	)

}