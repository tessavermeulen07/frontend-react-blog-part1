import axios from "axios";

function OpdrachtEen() {

    async function getBlogposts() {
        try {
            const result = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            console.log(result);

        } catch (error) {
            console.log(error);
        }
    }

    async function getBlogpostsById(id) {
        try {
            const result = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            });
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function postBlogpost() {
        try {
            const post = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                "title": "Wat gebruiker heeft ingevuld",
                "subtitle": "Wat gebruiker heeft ingevuld",
                "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
                "author": "Voornaam achternaam",
                "created": "2023-09-21T09:30:00Z",
                "readTime": 1,
                "comments": 0,
                "shares": 0
            }, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d',
                }
            })
            console.log(post);
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteBlogpost() {
        try {
            const del = await axios.delete('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/18', {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }

            })
            console.log(del.data);
            console.log('Post succesvol verwijderd');
        } catch (error) {
            console.log(error);
            console.log('Post bestaat niet');
        }
    }

    async function changeBlogpost() {
        try {
            const change = await axios.put('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/1',
                {
                    author: "Anna de Kok",
                    comments: 12,
                    content: "Italië, het land van heerlijke pasta, pizza en gelato, is een culinair paradijs dat elke fijnproever moet ervaren. In deze blog nemen we je mee op een smakelijke reis door Bella Italia. Ontdek de geheimen achter de perfecte risotto, leer hoe je zelfgemaakte pasta maakt en proef de verrukkelijke regionale gerechten van Noord tot Zuid. Bereid je voor om je smaakpapillen te verwennen in de keuken van de laarsvormige natie.",
                    created: "2023-09-21T09:30:00Z",
                    id: 1,
                    readTime: 5,
                    shares: 8,
                    subtitle: "Een culinaire reis door het prachtige Italië",
                    title: "De Smaken van Italië"
                }, {
                headers: {
                    'novi-education-project-id': '268aff3c-ae58-411a-a55f-e0c1ec05146d'
                }
            })
            console.log(change.data);
            console.log('Post succesvol gewijzigd');
        } catch (error) {
            console.log(error);
            console.log('Post niet gewijzigd');
        }
    }

    return (
        <>

            <button type="button" onClick={getBlogposts}>Haal de blogposts op</button>

            <button type="button" onClick={() => getBlogpostsById(7)}>Haal blogpost 6 op</button>

            <button type="button" onClick={postBlogpost}>Post blog</button>

            <button type="button" onClick={deleteBlogpost}>Verwijder post</button>

            <button type="button" onClick={changeBlogpost}>Wijzig Subtitel van post 1</button>

        </>
    )
}

export default OpdrachtEen;