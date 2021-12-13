import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'

import './assets/styles/global.css'

import Homepage from './Pages/Homepage/Homepage'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Journey from './Pages/Journey/Journey'
import Hamburguer from './Pages/Hamburguer/Hamburguer'
import Friends from './Pages/Friends/Friends'
import AddFriend from './Pages/AddFriend/AddFriend'
import Trade from './Pages/Trade/Trade'
import TradeExample from './Pages/TradeExample/TradeExample'
import TradePractice from './Pages/TradePractice/TradePractice'
import Congratulations from './Pages/Congratulations/Congratulations'

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
				<Route path="/add-friend" element={ <AddFriend /> } />
				<Route path="/trade" element={ <Trade /> } />
				<Route path="/trade-example" element={ <TradeExample /> } />
				<Route path="/trade-practice" element={ <TradePractice /> } />
				<Route path="/congratulations" element={ <Congratulations /> } />
			</Routes>
		</Router>
	);
}

export default App;
