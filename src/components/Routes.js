import React from 'react'
import { BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

//Common Components
import Footer from './common/Footer';
import Cart from './common/Cart';

//Pages
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

export default () => (
	<Router>
		{/* <Cart /> */}
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/products/:lat/:long' component={Products} />
		</Switch>
		<Footer/>
	</Router>
)
