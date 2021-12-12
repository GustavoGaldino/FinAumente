import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'

import Homepage from './Pages/Homepage/Homepage'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'


import './assets/styles/global.css'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={ <Homepage /> } />
				<Route path="/register" element={ <Register /> } />
				<Route path="/login" element={ <Login /> } />
			</Routes>
		</Router>
	);
}

export default App;
