// Hook
import { useState, useEffect } from "react"
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
//axios
import axios from "axios"

//endpoint
const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

function App() {
  const initialFormPost = {
    author: '',
    title: '',
    body: '',
    public: false
  }

  const [formPosts, setFormPosts] = useState(initialFormPost)

  function handleFormPosts(event) {
    const checkboxValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setFormPosts(formPost => ({
      ...formPost,
      [event.target.post]: event.target.value
    }))

  }


  return (
    <>
      <div className="container">
        <h1>Post Form</h1>

      </div>
    </>
  )
}

export default App
