import "./App.css"
import "./home.css"
import Card from "./components/Card"
import Container from "./components/Container.js"
import Navbar from "./components/Navbar.js"
import Social from "./components/Social"

function App() {
	return (
		<div id="app">
			<Navbar />
			<div className="content">
				<Container className="container--home container--main">
					<Card className="home__left-card">
						<img
							className="home__img"
							src="/images/home_hero.jpg"
							alt="weight scale"
						/>
					</Card>
					<Card className="home__right-card">
						<h1 className="home__title">WEIGHTS</h1>
						<p>The simplest app for tracking your body weight every day.</p>
					</Card>
					<img
						className="home__scale-watermark"
						src="/images/Scale_v1.png"
						alt=""
					/>
				</Container>
				<Container className="container--home-extra">
					<p>Created by Ezequiel González Macho</p>
					<Social />
				</Container>
			</div>
		</div>
	)
}

export default App
