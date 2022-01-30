import React, {useState} from 'react'

const ReviewForm = ({handleSubmit}) => {
    const [user, setUser] = useState("")
    const [newReview, setNewReview] = useState("")
  
    function submit(e){
        e.preventDefault()
        const formData = {
        user:user,
        review:newReview
        }
        fetch("http://localhost:3000/reviews",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => handleSubmit(data))

        setUser("")
        setNewReview("")
    }
    return (
        <div className="comments-form-container">
            <h2 className="form">New Review</h2>
            <form onSubmit={submit} className="comments-form">
                <input type="text" name="user" placeholder="   Your name..." value={user} onChange={(e)=>setUser(e.target.value)} /><br/>
                <input type="text" name="newReview" placeholder="   Write your review here..." value={newReview} onChange={(e)=>setNewReview(e.target.value)}/><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ReviewForm
