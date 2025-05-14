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
        <form>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={formPosts.author}
              onChange={handleFormPosts}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formPosts.title}
              onChange={handleFormPosts}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea
              className="form-control"
              id="body"
              name="body"
              value={formPosts.body}
              onChange={handleFormPosts}
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="public"
              checked={formPosts.public}
              onChange={handleFormPosts}
            />
            <label >Public?</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
