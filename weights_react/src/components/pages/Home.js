import Card from "../Card"
import Container from "../Container.js"
import Social from "../Social"
import "./Home.css"

const Home = () => {
    return (
        <div className="content home">
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
    )
}

export default Home