import React from "react"
import './_ratings.scss'

// export default function Ratings(rating) {
//     return (
//         <React.Fragment>
//             <i className="fa-solid fa-star"></i>
//             <i className="fa-solid fa-star"></i>
//             <i className="fa-solid fa-star"></i>
//             <i className="fa-solid fa-star"></i>
//             <i className="fa-solid fa-star"></i>
//         </React.Fragment>
//     )
// }

function Ratings({ rating }) {
    const icons = Array(5).fill(null);

    return (
        <div className="starRating" >
            {icons.map((icon, index) => (
                <i key={index} className={`fa-solid fa-star ${index < rating ? 'filled' : 'empty'}`}></i>
            ))}
        </div>
    );
}

export default Ratings;