import './Home.css';
import logo from "../../assets/logo-white.png";

function Home() {
    return (
        <>
            <header className="page-container">
                <img src={logo} alt="Company logo"/>

            </header>
            <h1>Dit is de Home pagina</h1>
        </>
    )
}

export default Home;