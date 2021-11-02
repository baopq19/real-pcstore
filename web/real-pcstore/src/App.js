import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import Register from './pages/Register/Register';
import { Toaster } from 'react-hot-toast';
import { APPEARANCE, DARK_MODE, LIGHT_MODE } from './util/Constant';

function App() {
	const userAppearance = localStorage.getItem(APPEARANCE);
	const htmlEle = document.getElementsByTagName('html')[0];
	if (userAppearance === DARK_MODE) {
		htmlEle.classList.add('dark');
	} else if (userAppearance !== LIGHT_MODE) {
		localStorage.setItem(APPEARANCE, LIGHT_MODE);
	}

	return (
		<div className='font-mono App'>
			<Router>
				<Switch>
					<Route exact path='/'>
						<DefaultLayout active='Home'>
							<Home />
						</DefaultLayout>
					</Route>
					{/* Route Login */}
					<Route exact path='/login'>
						<Login />
					</Route>

					{/* Route Register */}
					<Route exact path='/register'>
						<Register />
					</Route>
				</Switch>
			</Router>
			<Toaster />
		</div>
	);
}

export default App;
