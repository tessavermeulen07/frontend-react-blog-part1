import './SingleBlog.css';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import dateFormat from "../../helpers/dateFormat.js";


function SingleBlog() {

    const [singleBlogpost, setSingleBlogpost] = useState({});
    const [isDeleted, setIsDeleted] = useState(false);
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


    async function deleteBlogpost() {
        try {
            const del = await axios.delete('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/18', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }

            })
            console.log(del.data);
            console.log('Post succesvol verwijderd');
            setIsDeleted(true);
        } catch (error) {
            console.log(error);
            console.log('Post bestaat niet');
            console.error("Het verwijderen van de blogpost is mislukt", error);
        }
    }

    if (isDeleted) {
        return (
            <div className="main-container-single">
                <section className="container-single">
                    <p>De blogpost is succesvol verwijderd.</p>
                    <Link to="/alle-blogs">Terug naar het overzicht</Link>
                </section>
            </div>
        );
    }

    if (Object.keys(singleBlogpost).length === 0) {
        return <p>Laden...</p>;
    }

    return (
        <>
            <div className="main-container-single">
                <section className="container-single">
                    <h1>{singleBlogpost.title}</h1>
                    <h2>{singleBlogpost.subtitle}</h2>
                    <p className={"meta-data"}>Geschreven
                        door {singleBlogpost.author} op {dateFormat(singleBlogpost.created)}</p>
                    ({singleBlogpost.readTime} minuten)
                    <div>
                        <p>{singleBlogpost.content}</p>
                    </div>
                    <p>{singleBlogpost.comments} reacties - {singleBlogpost.shares} gedeeld</p>
                    <Link to="/alle-blogs">Terug naar de overzichtspagina</Link>
                    <button type="button" onClick={deleteBlogpost}>Delete post</button>
                </section>
            </div>
        </>
    )
}

export default SingleBlog;