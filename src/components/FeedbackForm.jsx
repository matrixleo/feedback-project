import { useState } from "react"
import Card from "./shared/Card"

function FeedbackForm() {

    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <div className="input-group">
                <input 
                onChange={handleTextChange}
                type='text'
                placeholder="Write us something!"
                value={text}
                />
                <button type="submit">Send</button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm