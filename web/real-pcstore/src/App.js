import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

function App() {
	return (
		<div className='App'>
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
				</Switch>
			</Router>
		</div>
	);
}

export default App;
