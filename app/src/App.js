import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'

import Homepage from './Pages/Homepage/Homepage'


import './assets/styles/global.css'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={ <Homepage /> } />
			</Routes>
		</Router>
	);
}

export default App;
