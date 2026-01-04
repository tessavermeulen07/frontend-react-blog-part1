import './New-Post.css'
import {useState} from "react";
import TextLabel from "../../components/textLabel/TextLabel.jsx";
import Button from "../../components/button/Button.jsx";
import readTime from "../../helpers/readTime.js";
import {useNavigate} from "react-router-dom";
import allBlogs from "../all-blogs/AllBlogs.jsx";
import AllBlogs from "../all-blogs/AllBlogs.jsx";


function NewPost() {
    const [titleValue, setTitleValue] = useState('');
    const [subTitleValue, setSubTitleValue] = useState('');
    const [authorValue, setAuthorValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [error, setError] = useState('')

    const charCount = messageValue.length;
    const wordCount = messageValue.trim() === "" ? 0 : messageValue.trim().split(/\s+/).length

    let navigate = useNavigate();

    const handleSubmit = (event) => {

       event.preventDefault();

        const maxWords = messageValue.split(' ');
        const date = new Date()

        if (!titleValue || !subTitleValue || !authorValue || !messageValue) {
            setError('Zorg dat alle velden zijn ingevuld.');
        } else if (messageValue.length > 2000) {
            setError('Je bericht bevat meer dan 2000 karakters.');
        } else if (maxWords.length < 300) {
            setError('Je bericht bevat minder dan 300 woorden.');
        } else {
            setError('');
        }

        console.log(`
        "title": ${titleValue}
        "subtitle": ${subTitleValue}
        "content": ${messageValue}
        "author": ${authorValue}
        "created": ${date.toISOString()}
        "readTime": ${readTime(messageValue)} minuten leestijd
        "comments": ${0}
        "shares": ${0}
        `);
    }

    return (
        <>
            <h1>Post toevoegen</h1>


            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <TextLabel
                        labelHTML="title"
                        startTextLabel="Titel"
                        typeOfLabel="text"
                        idOfLabel="title"
                        nameOfLabel="title"
                        sizeOfLabel="100"
                        valueOfLabel={titleValue}
                        onChangeOfLabel={(e) => setTitleValue(e.target.value)}
                    />

                    <TextLabel
                        labelHTML="subtitle"
                        startTextLabel="Subtitel"
                        typeOfLabel="text"
                        idOfLabel="subtitle"
                        nameOfLabel="subtitle"
                        sizeOfLabel="100"
                        valueOfLabel={subTitleValue}
                        onChangeOfLabel={(e) => setSubTitleValue(e.target.value)}
                    />

                    <TextLabel
                        labelHTML="author"
                        startTextLabel="Naam en achternaam"
                        typeOfLabel="text"
                        idOfLabel="author"
                        nameOfLabel="author"
                        sizeOfLabel="100"
                        valueOfLabel={authorValue}
                        onChangeOfLabel={(e) => setAuthorValue(e.target.value)}
                    />

                    <label htmlFor="message">
                        <p>Blogpost</p>
                        <textarea
                            id="message"
                            name="message"
                            rows="15"
                            cols="100"
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        >
                </textarea>
                    </label>

                    <div>
                    <span style={{color: wordCount < 300 ? 'red' : 'green'}}>
                    Woorden: {wordCount} / 300
                    </span>
                        {" | "}
                        <span style={{color: charCount > 2000 ? 'red' : 'black'}}>
                    Karakters: {charCount} / 2000
                    </span>
                    </div>

                    {error && <p>{error}</p>}

                    <Button
                        typeOfButton="submit"
                        nameOfButton="send"
                        valueOfButton="send"
                        textOnButton="Verstuur"
                        onClickOfButton={() => navigate("/alle-blogs")}
                    />
                </form>
            </div>
        </>
    )
}

export default NewPost;