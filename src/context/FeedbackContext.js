import { useState, createContext } from "react";
import {v4 as uuidv4} from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is feedback item 1",
            rating:10
        },
        {
            id: 2,
            text: "This is feedback item 2",
            rating:10
        },
        {
            id: 3,
            text: "This is feedback item 3",
            rating:10
        },
    ])


    //This sets the item that should be edited in the form
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //DeleteFeedback
    const deleteFeedback = id => {
        if(window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    //Update feedback item
    const updateFeedback = (id, updItem) => {
        // console.log(id, updItem)
        setFeedback(
            feedback.map(item => item.id === id ? {...item, ...updItem} : item)
            )
    }

//Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

//Set item to be updated
    const editFeedback = item => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return (
            <FeedbackContext.Provider value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback
            }}>
                {children}
            </FeedbackContext.Provider>
    )
}

export default FeedbackContext