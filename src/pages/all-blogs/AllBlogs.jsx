import './AllBlogs.css';
import posts from '../../constants/data.json'
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import SingleBlog from "../single-blog/SingleBlog.jsx";
import {useEffect, useState} from "react";

posts.shares = undefined;
posts.author = undefined;

function AllBlogs() {
// console.log(posts)
// console.log werkt

    const {id} = useParams();
    const idAsNumber = Number(id);
    posts.find((posts) => posts.id === idAsNumber);
    const [blogposts, setBlogposts] = useState([]);

    async function getBlogposts() {
        try {
            const result = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setBlogposts(result.data)
            // console.log(result);

        } catch (error) {
            `Het laden is van de blogposts is niet gelukt`
            // console.log(error);
        }
    }

    useEffect(() => {
        void getBlogposts();
        // console.log(getBlogposts());
    }, []);

    return (
        <>
            <div className="main-container">
                <h1>Aantal blogposts op deze website: {blogposts.length}</h1>

                <ul className="list-container">
                    {blogposts.map((blog) => {
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
