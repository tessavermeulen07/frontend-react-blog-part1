import './SingleBlog.css';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import dateFormat from "../../helpers/dateFormat.js";
import AllBlogs from "../all-blogs/AllBlogs.jsx";

function SingleBlog() {

    const [singleBlogpost, setSingleBlogpost] = useState({});
    const {id} = useParams();


    async function getBlogpostsById(id) {
        try {
            const result = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            setSingleBlogpost(result.data);
        } catch (error) {
            `Het laden van de blogpost is niet gelukt.`
        }
    }

    useEffect(() => {
        void getBlogpostsById(id);
    }, [id]);

    if (Object.keys(singleBlogpost).length === 0) {
        return <p>Laden...</p>;
    }

    return (
        <>
            <section className="main-container">
                <h1>{singleBlogpost.title}</h1>
                <h2>{singleBlogpost.subtitle}</h2>
                <p className={"meta-data"}>Geschreven door {singleBlogpost.author} op {dateFormat(singleBlogpost.created)}</p>
                ({singleBlogpost.readTime} minuten)
                <div>
                    <p>{singleBlogpost.content}</p>
                </div>
                <p>{singleBlogpost.comments} reacties - {singleBlogpost.shares} gedeeld</p>
                <Link to="/alle-blogs">Terug naar de overzichtspagina</Link>
            </section>

            {/*<section className="main-container">*/}
            {/*    <h1>{post.title} </h1>*/}
            {/*    <h2>{post.subtitle}</h2>*/}
            {/*    <p className="meta-data">Geschreven door {post.author} op {dateFormat(post.created)}</p>*/}
            {/*    ({post.readTime} minuten)*/}
            {/*    <div>*/}
            {/*        <p>{post.content}</p>*/}
            {/*    </div>*/}
            {/*    <p>{post.comments} reacties - {post.shares} gedeeld</p>*/}
            {/*    <Link to="/alle-blogs" element={<AllBlogs/>}>Terug naar de overzichtspagina</Link>*/}
            {/*</section>*/}
        </>
    )
}

export default SingleBlog;