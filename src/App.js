import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./components/data/FeedbackData"

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
        <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>
        </div>
        </> 
    )
}
export default App