// Hook
import { useState } from "react"
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

  function handleFormPost(event) {

    const checkboxValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setFormPosts(formPost => ({
      ...formPost,
      [event.target.name]: checkboxValue
    }))
  }

  function createPost(event) {

    event.preventDefault()

    axios.post(endpoint, formPosts)
      .then(resp => {
        console.log(resp.data)

        setFormPosts(initialFormPost) //reset di tutti i campi
      })
      .catch(error => console.log(error))


  }


  return (
    <>
      <div className="container">
        <h1>Post Form</h1>
        <form onSubmit={createPost}>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              placeholder="Author"
              value={formPosts.author}
              onChange={handleFormPost}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Title"
              value={formPosts.title}
              onChange={handleFormPost}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea
              className="form-control"
              id="body"
              name="body"
              placeholder="Body"
              value={formPosts.body}
              onChange={handleFormPost}
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="public"
              name="public"
              checked={formPosts.public}
              onChange={handleFormPost}
            />
            <label className="form-check-label" htmlFor="public">Public?</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
