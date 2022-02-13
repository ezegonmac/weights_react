import "./App.css"
import Navbar from "./components/Navbar.js"
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home.js'
import Footer from './components/Footer.js'
import TablePage from "./components/pages/TablePage.js"
import NewWeightPage from "./components/pages/NewWeightPage.js"
import NotFoundPage from "./components/pages/NotFoundPage"

function App() {
	return (
		<div id="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new-weight" element={<NewWeightPage />} />
				<Route path="/table" element={<TablePage />} />
				<Route path="/graph" element={<h1>Graph</h1>} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div >
	)
}

export default App
