import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'

import Nivel from './Pages/Nivel/Nivel'

import './assets/styles/global.css'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={ <Nivel /> } />
			</Routes>
		</Router>
	);
}

export default App;
