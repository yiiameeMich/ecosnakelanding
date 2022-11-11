import React from 'react';
import './productscard.css'


export default function ProductCard ({name, price, description, image}) {

	return (

		<div className="card-wrapper">
			<div className="image-wrapper">
				<img src={image} alt="" className="product-image"/>
			</div>
			<div className="products-text-container">
				<h1 className="product-name main-text">{name}</h1>
				<h1 className="product-description primary-text">{description}</h1>
				<h1 className="product-price main-text">{price}</h1>
			</div>
			<div className="button-container">
				<button className="shop-btn main-text">Shop Now</button>
			</div>
		</div>

	)

}