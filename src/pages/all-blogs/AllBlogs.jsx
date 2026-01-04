import './AllBlogs.css';
import posts from '../../constants/data.json'
import {Link, useParams} from "react-router-dom";
import SingleBlog from "../single-blog/SingleBlog.jsx";

posts.shares = undefined;
posts.author = undefined;

function AllBlogs() {
    console.log(posts)
//console.log werkt

    const {id} = useParams();
    const idAsNumber = Number(id);
    posts.find((posts) => posts.id === idAsNumber);

    // Notatie op deze manier:
    // De Smaken van Italië (Anna de Kok)
    // 12 reacties - 8 keer gedeeld

    return (
        <>
            <div className="main-container">
                <h1>Aantal blogposts op deze website: {posts.length}</h1>
                <ul className="list-container">
                    {posts.map((blog) => {
                            return <li key={blog.id}>
                                <article className="list-item-container">
                                <span><Link to={`/blog/${blog.id}`}
                                            element={<SingleBlog/>}>{blog.title}</Link> ({blog.author})</span>
                                    <span>{blog.comments} reacties - {blog.shares} keer gedeeld</span>
                                </article>
                            </li>
                        }
                    )}
                </ul>
            </div>
        </>
    )
}

export default AllBlogs;
