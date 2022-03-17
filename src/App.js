import {v4 as uuidv4 } from "uuid"
import { BrowserRouter  as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import AboutPage from "./pages/AboutPage"
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
        <Router>
            <Header />
            <div className='container'>
            <Routes>
                <Route exact path='/' element={<>

                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>

                </>}>
                </Route>
                
                <Route exact path="/about" element={<AboutPage/>}></Route>
            </Routes>
            
            </div>
            
        </Router> 
    )
}
export default App