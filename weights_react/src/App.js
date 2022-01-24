import "./App.css"
import Card from "./components/Card"
import Container from "./components/Container.js"
import Navbar from "./components/Navbar.js"

function App() {
	return (
		<div id="app">
			<Navbar />
			<div className="content">
				<Container className="container--home">
					<Card className="home__left-card">
						<img
							className="home__img"
							src="/images/home_hero.jpg"
							alt="weight scale"
						/>
					</Card>
					<Card className="home__right-card">
						<h1>WEIGHTS</h1>
						<p>The simplest app for tracking your body weight every day.</p>
					</Card>
				</Container>
			</div>
		</div>
	)
}

export default App
