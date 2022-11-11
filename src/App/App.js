import './App.css';
import Header from '../Header/Header'
import MainPage from "../pages/MainPage/MainPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import BlogPage from "../pages/BlogPage/BlogPage";


function App() {
	return (
		<div className="App">
			<Router>
				<Header/>
				<Switch>
					<Route exact path='/'>
						<MainPage/>
					</Route>
					<Route path='/products'>
						<ProductsPage/>
					</Route>
					<Route path='/blog'>
						<BlogPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
