import './App.css';
import logo from './assets/logo-white.png';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AllBlogs from "./pages/overall-view/AllBlogs.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";
import NotFound from "./pages/404/NotFound.jsx";




function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Alle posts</li>
                    <li>Nieuwe post</li>
                </ul>
            </nav>

            <div className="page-container">
                <img src={logo} alt="Company logo"/>
                <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*Deze werkt*/}
                <Route path="/all-blogs" element={<AllBlogs/>}/>
                {/*Deze werkt*/}
                <Route path="/new-post" element={<NewPost/>}/>
                {/*Deze werkt*/}
                <Route path="/not-found" element={<NotFound/>}/>
                {/*Deze werkt*/}

            </Routes>
        </>
    )
}

export default App
