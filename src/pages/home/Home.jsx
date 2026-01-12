import './Home.css';
import logo from "../../assets/logo-white.png";

function Home() {
    return (
        <>
            <header className="page-container">
                <img src={logo} alt="Company logo"/>
            </header>
            <main className="main-container-home">
                <h1>
                    Bij Blogventure geloven we in de kracht van woorden
                </h1>
            </main>
        </>
    )
}

export default Home;