import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
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
