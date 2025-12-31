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
            <section>
                <h2>{post.title} ({post.readTime} minuten)</h2>
                <h3>{post.subtitle}</h3>
                <p className="meta-data">Geschreven door {post.author} op {dateFormat(post.created)}</p>
                <div>
                    {/* Hier komt de inhoud van je blog */}
                    <p>{post.content}</p>
                </div>
                <p>{post.comments} reacties - {post.shares} gedeeld</p>
                <Link to="/alle-blogs" element={<AllBlogs/>}>Terug naar de overzichtspagina</Link>
            </section>
        </>
    )
}

export default SingleBlog;