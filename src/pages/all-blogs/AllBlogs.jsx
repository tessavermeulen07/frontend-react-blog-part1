import './AllBlogs.css';
import posts from '../../constants/data.json'
import {data} from "react-router-dom";

posts.shares = undefined;

posts.author = undefined;

function AllBlogs() {
  console.log(posts)
//console.log werkt


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
                        <span>{blog.title} ({blog.author})</span>
                        <span>{blog. comments} reacties - {blog.shares} keer gedeeld</span>
                    </article>
                </li>
                }
                )}
            </ul>
        </>
    )
}

export default AllBlogs;

// <ul>
//     {inventory.map((tv) => {
//         return <li key={tv.type} className="most-sold image-most-sold">
//             <img src={tv.sourceImg} alt={`Afbeelding van ${tv.name}`}/>
//             <div className="most-sold-info">
//                 <h3>{bestSoldTv(tv)}</h3>
//                 <p className="numbers">{bestSoldTvPrice(tv)}</p>
//                 <p>{bestSoldTvSize(tv)}</p>
//
//                 <ol className="list-box">
//                     {tv.options.map((option) => {
//                             if (option.applicable === true) {
//                                 return <li key={option.name}><img src={check} alt="check icon"
//                                                                   className="icon"/> {option.name}</li>
//                             } else {
//                                 return <li key={option.name}><img src={minus} alt="check icon"
//                                                                   className="icon"/> {option.name}</li>
//                             }
//                         }
//                     )}
//                 </ol>
//             </div>
//         </li>
//     })}
// </ul>
