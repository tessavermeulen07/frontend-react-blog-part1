import './New-Post.css'
import {useState} from "react";
import TextLabel from "../../components/textLabel/TextLabel.jsx";
import Button from "../../components/button/Button.jsx";
import readTime from "../../helpers/readTime.js";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


function NewPost() {
    const [titleValue, setTitleValue] = useState('');
    const [subTitleValue, setSubTitleValue] = useState('');
    const [authorValue, setAuthorValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [error, setError] = useState('');
    const [succes, setSucces] = useState(false);
    const [newPostId, setNewPostId] = useState(null);

    const charCount = messageValue.length;


    const handleSubmit = async (event) => {

        event.preventDefault();

        const date = new Date()


        if (!titleValue || !subTitleValue || !authorValue || !messageValue) {
            setError('Zorg dat alle velden zijn ingevuld.');
            return;
        } else if (messageValue.length < 300) {
            setError('Je bericht bevat minder dan 300 karakters.');
            return;
        } else if (messageValue.length > 2000) {
            setError('Je bericht bevat meer dan 2000 karakters');
            return;
        } else
            setError('');

        try {
            const post = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                "title": `${titleValue}`,
                "subtitle": `${subTitleValue}`,
                "content": `${messageValue}`,
                "author": `${authorValue}`,
                "created": date.toISOString(),
                "readTime": readTime(messageValue),
                "comments": 0,
                "shares": 0
            }, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                }
            })

            setNewPostId(post.data.id);
            setSucces(true);
        } catch (error) {

            setError("Het is niet gelukt om de blog te plaatsen. Probeer het later opnieuw.");
        }

    }


    return (
        <>

            <div className="main-container-new">
                <h1>Post toevoegen</h1>

                {succes === true ? (
                    <div className="page-container-succes">
                        <section className="succes-section">
                            <p>De blogpost is succesvol toegevoegd.</p>
                            <p>Je kunt deze hier <Link to={`/blog/${newPostId}`}>bekijken.</Link></p>
                        </section>
                    </div>
                ) : (
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <TextLabel
                                labelHTML="title"
                                startTextLabel="Titel"
                                typeOfLabel="text"
                                idOfLabel="title"
                                nameOfLabel="title"
                                sizeOfLabel="100vh"
                                valueOfLabel={titleValue}
                                onChangeOfLabel={(e) => setTitleValue(e.target.value)}
                            />

                            <TextLabel
                                labelHTML="subtitle"
                                startTextLabel="Subtitel"
                                typeOfLabel="text"
                                idOfLabel="subtitle"
                                nameOfLabel="subtitle"
                                sizeOfLabel="100vh"
                                valueOfLabel={subTitleValue}
                                onChangeOfLabel={(e) => setSubTitleValue(e.target.value)}
                            />

                            <TextLabel
                                labelHTML="author"
                                startTextLabel="Naam en achternaam"
                                typeOfLabel="text"
                                idOfLabel="author"
                                nameOfLabel="author"
                                sizeOfLabel="100vh"
                                valueOfLabel={authorValue}
                                onChangeOfLabel={(e) => setAuthorValue(e.target.value)}
                            />

                            <label htmlFor="message">
                                <p>Blogpost</p>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="15"
                                    cols="100vh"
                                    value={messageValue}
                                    onChange={(e) => setMessageValue(e.target.value)}
                                >
                </textarea>
                            </label>

                            <div>
                    <span>
                   Karakters: {charCount} / 2000
                    </span>
                            </div>

                            {error && <p className="error-message">{error}</p>}

                            <Button
                                typeOfButton="submit"
                                nameOfButton="send"
                                valueOfButton="send"
                                textOnButton="Verstuur"
                            />
                        </form>
                    </div>
                )}</div>

        </>
    )
}

export default NewPost;