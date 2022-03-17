import {v4 as uuidv4 } from "uuid"
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackData from "./components/data/FeedbackData"
import FeedbackForm from "./components/FeedbackForm"

function App() {
    const [feedback, setFeetback] = useState(FeedbackData)
    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeetback([newFeedback, ...feedback]) 
    }

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you wanna delete this?")){
            setFeetback(feedback.filter((item) => item.id !== id ))
        }
    }
    return  (
        <>
        <Header />
        <div className='container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>
        
        </div>
        </> 
    )
}
export default App