import React from 'react'
import { BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

//Common Components
import Footer from './common/footer/Footer';

//Pages
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

export default () => (
	<Router>
		{/* <Cart /> */}
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/products' component={Products} />
			<Route exact path='*' component={Home} />
		</Switch>
		<Footer/>
	</Router>
)
