import './SingleBlog.css';
import posts from '../../constants/data.json';
import {Link, useParams} from "react-router-dom";
import dateFormat from '../../helpers/dateFormat.js';
import AllBlogs from "../all-blogs/AllBlogs.jsx";

posts.shares = undefined;
posts.author = undefined;

function SingleBlog() {

    const {id} = useParams();
    const idAsNumber = Number(id);
    const post = posts.find((posts) => posts.id === idAsNumber);

    if (!post) {
        return <p>Blogpost niet gevonden!</p>;
    }

    return (
        <>
            <section className="main-container">
                <h1>{post.title} </h1>
                <h2>{post.subtitle}</h2>
                <p className="meta-data">Geschreven door {post.author} op {dateFormat(post.created)}</p>
                ({post.readTime} minuten)
                <div>
                    <p>{post.content}</p>
                </div>
                <p>{post.comments} reacties - {post.shares} gedeeld</p>
                <Link to="/alle-blogs" element={<AllBlogs/>}>Terug naar de overzichtspagina</Link>
            </section>
        </>
    )
}

export default SingleBlog;