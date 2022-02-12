import "./App.css"
import Navbar from "./components/Navbar.js"
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home.js'
import TablePage from "./components/pages/TablePage"

function App() {
	return (
		<div id="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new-weight" element={<h1>New weight</h1>} />
				<Route path="/table" element={<TablePage />} />
				<Route path="/graph" element={<h1>Graph</h1>} />
				<Route path="*" element={<h1 style={{ color: "black", textAlign: "center" }}>404 error: Not found</h1>} />
			</Routes>
		</div >
	)
}

export default App
