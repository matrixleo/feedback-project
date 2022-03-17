import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackData from "./components/data/FeedbackData"
import FeedbackForm from "./components/FeedbackForm"

function App() {
    const [feedback, setFeetback] = useState(FeedbackData)
    
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you wanna delete this?")){
            setFeetback(feedback.filter((item) => item.id !== id ))
        }
    }
    return  (
        <>
        <Header />
        <div className='container'>
        <FeedbackForm feedback={feedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>
        
        </div>
        </> 
    )
}
export default App