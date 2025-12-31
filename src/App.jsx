import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AllBlogs from "./pages/all-blogs/AllBlogs.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";
import NotFound from "./pages/404/NotFound.jsx";
import Navigation from "./navigation/Navigation.jsx";
import SingleBlog from "./pages/single-blog/SingleBlog.jsx";


function App() {
    return (
        <>
            <Navigation/>

            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*Deze werkt*/}
                    <Route path="/alle-blogs" element={<AllBlogs/>}/>
                    {/*Deze werkt*/}
                    <Route path="/nieuwe-post" element={<NewPost/>}/>
                    {/*Deze werkt*/}
                    <Route path="/blog/:id" element={<SingleBlog/>}/>

                    <Route path="*" element={<NotFound/>}/>
                    {/*Deze werkt*/}
                </Routes>
            </main>
        </>
    )
}

export default App
