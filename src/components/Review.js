import React, {useState, useEffect} from 'react'

const Review = () => {
    const [reviews, setReview] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/reviews")
        .then(res=>res.json())
        .then(setReview)
    },[])
    return (
        <div className="signup">
            {reviews.map(review=>(
                <div>
                    <h3>{review.user}</h3>
                    <p>{review.review}</p>
                </div>
            ))}
        </div>
    )
}

export default Review
