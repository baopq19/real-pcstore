import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import Register from './pages/Register/Register';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { DARK_MODE } from './util/Constant';

function App() {
	return (
		<div className={`App `}>
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
