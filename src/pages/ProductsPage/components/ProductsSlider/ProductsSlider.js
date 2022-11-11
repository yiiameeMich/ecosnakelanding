import React from 'react';
import './productsslides.css'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductsSlider() {

	const productsInfo = [
		{
			name: 'Cleanser',
			price: '$23.00',
			description: 'Vitamin B3 + Zink',
			image: `${process.env.PUBLIC_URL}/assets/images/product-1.png`
		}, {
			name: 'Serum',
			price: '$32.00',
			description: 'Q + A',
			image: `${process.env.PUBLIC_URL}/assets/images/products-2.png`
		}, {
			name: 'Cream',
			price: '$110.00',
			description: '4 steps to Healthy Skin',
			image: `${process.env.PUBLIC_URL}/assets/images/product-3.png`
		}, {
			name: 'EcoSnake set',
			price: '$71.00',
			description: 'Anti acne washing gel',
			image: `${process.env.PUBLIC_URL}/assets/images/product-4.png`
		}
	];

	function cardLoader () {
		return (
			productsInfo
				.map((card, i) => <ProductCard name={card.name}
				             description={card.description}
				             price={card.price}
				                               image={card.image}
								key={productsInfo[i]}/>)
		)
	}

	return (

		<section id='productsSlider'>
			<div className='container'>
				<div className="products-name-container">
					<h1 className='products-heading main-text'>Products</h1>
					<h1 className='products-description primary-text'>Healthy skin, confident you</h1>
				</div>
				<div className='products-slider'>
					{cardLoader()}
				</div>
			</div>
		</section>
	)

}