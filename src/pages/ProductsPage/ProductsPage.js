import React from 'react';
import AboutProducts from './components/AboutProducts/AboutProducts'
import ProductsSlider from "./components/ProductsSlider/ProductsSlider";
import ProductsNavigation from "./components/productsNavigation/productsNavigation";

export default function ProductsPage () {

	return (

		<div className="pp-container">
			<AboutProducts />
			<ProductsSlider />
			<ProductsNavigation />
		</div>

	)

}