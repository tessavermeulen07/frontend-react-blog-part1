import './New-Post.css'
import {useState} from "react";
import TextLabel from "../../components/textLabel/TextLabel.jsx";
import Button from "../../components/button/Button.jsx";


function NewPost() {
    const [titleValue, setTitleValue] = useState('');
    const [subTitleValue, setSubTitleValue] = useState('');
    const [authorValue, setAuthorValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!titleValue && !subTitleValue && !authorValue && !messageValue) {
            setError('Zorg dat alle velden zijn ingevuld!')
        } else setError('')

        console.log(`
        Hier komt alles te staan van het blog
        `);
    }

    return (
        <>
            <h1>Dit is de pagina voor een het plaatsen van een nieuwe blog</h1>
            {/*In het formulier om een blogpost te plaatsen:*/}
            {/*Titel*/}
            {/*Subtitel*/}
            {/*Auteur*/}
            {/*Bericht*/}
            {/*Alle velden moeten verplicht worden ingevuld. De blogpost moet minimaal 300 en maximaal 2000 karakters lang*/}
            {/*zijn. Als er niet aan deze voorwaarden is voldaan, kan de post niet worden verzonden.*/}

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
                    startTextLabel="Auteur"
                    typeOfLabel="text"
                    idOfLabel="author"
                    nameOfLabel="author"
                    sizeOfLabel="100"
                    valueOfLabel={authorValue}
                    onChangeOfLabel={(e) => setAuthorValue(e.target.value)}
                />

                <label htmlFor="message">
                    <p>Bericht</p>
                    <textarea
                        id="message"
                        name="message"
                        rows="30"
                        cols="100"
                        value={messageValue}
                        onChange={(e) => setMessageValue(e.target.value)}
                    >
                </textarea>
                </label>
                {error && <p>{error}</p>}
                <Button
                    typeOfButton="submit"
                    nameOfButton="send"
                    valueOfButton="send"
                    textOnButton="Verstuur"
                />

            </form>
        </>
    )
}

export default NewPost;