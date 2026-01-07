import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AllBlogs from "./pages/all-blogs/AllBlogs.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";
import NotFound from "./pages/404/NotFound.jsx";
import Navigation from "./navigation/Navigation.jsx";
import SingleBlog from "./pages/single-blog/SingleBlog.jsx";
import OpdrachtEen from "./oefenen/OpdrachtEen.jsx";


function App() {
    return (
        <>
            <Navigation/>

            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/alle-blogs" element={<AllBlogs/>}/>
                    <Route path="/nieuwe-post" element={<NewPost/>}/>
                    <Route path="/blog/:id" element={<SingleBlog/>}/>

                    <Route path="/oefenen/" element={<OpdrachtEen/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </>
    )
}

export default App
