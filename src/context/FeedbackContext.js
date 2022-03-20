import {v4 as uuidv4 } from "uuid"
import { createContext , useState } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback , setFeedback] = useState([
        {
            id: 1,
            text: "this is piqkau materina",
            rating:10,
        },
        {
            id: 2,
            text: "this is piqkau materina 2",
            rating:2,
        },
        {
            id: 3,
            text: "this is piqkau materina 3",
            rating:7,
        },
    ])
    
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })
    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]) 
    }

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you wanna delete this?")){
            setFeedback(feedback.filter((item) => item.id !== id ))
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return(
        <FeedbackContext.Provider 
        value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,

            }}>
            {children}</FeedbackContext.Provider>
    )
}

export default FeedbackContext
