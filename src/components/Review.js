import React, {useState, useEffect} from 'react'
import ReviewForm from './ReviewForm'

const Review = () => {
    const [reviews, setReview] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8000/reviews")
        .then(res=>res.json())
        .then(localStorage.setReview)
    },[])

    function handleSubmit(newReview){
        setReview([...reviews, newReview])
      }

    return (
        <div>
            <ReviewForm handleSubmit={handleSubmit} />
            <div className="comments-container">
            {reviews.map(review => (
               <div className="comment-card">
                   <div><h3 className="name">{review.user}</h3></div>
                   <div className="userReview"><p>{review.review}</p></div>
               </div>
            ))}
        </div>
        </div>
    )
}

export default Review
