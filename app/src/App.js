import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'

import Homepage from './Pages/Homepage/Homepage'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Journey from './Pages/Journey/Journey'


import './assets/styles/global.css'
import Hamburguer from './Pages/Hamburguer/Hamburguer'
import Friends from './Pages/Friends/Friends'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={ <Homepage /> } />
				<Route path="/register" element={ <Register /> } />
				<Route path="/login" element={ <Login /> } />
				<Route path="/journey" element={ <Journey /> } />
				<Route path="/hamburguer" element={ <Hamburguer /> } />
				<Route path="/friends" element={ <Friends /> } />
			</Routes>
		</Router>
	);
}

export default App;
