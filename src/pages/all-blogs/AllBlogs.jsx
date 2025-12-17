import './AllBlogs.css';
import posts from '../../constants/data.json'
import {Link, useParams} from "react-router-dom";

posts.shares = undefined;

posts.author = undefined;

function AllBlogs() {
    console.log(posts)
//console.log werkt

    const {id} = useParams();
    const idAsNumber = Number(id);
    const currentPost = posts.find((posts) => posts.id === idAsNumber);

    // Notatie op deze manier:
    // De Smaken van Italië (Anna de Kok)
    // 12 reacties - 8 keer gedeeld

    return (
        <>
            <h1>Dit is de pagina met alle blogposts</h1>
            <p>Aantal blogposts op deze website: {posts.length}</p>
            <ul className="list-container">
                {posts.map((blog) => {
                        return <li key={blog.id}>
                            <article className="list-item-container">
                                <span><Link to="{`/blog/${blog.id}`}"
                                             element={<AllBlogs/>}>{blog.title}</Link> ({blog.author})</span>
                                <span>{blog.comments} reacties - {blog.shares} keer gedeeld</span>
                            </article>
                        </li>
                    }
                )}
            </ul>
        </>
    )
}

export default AllBlogs;
