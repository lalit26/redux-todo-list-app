import React, { useRef } from "react"
import { useDispatch } from "react-redux"

const CreatePost = () => {
  const dispatch = useDispatch() // Access dispatch from redux
  const titleRef = useRef(null) // Refs for accessing input values
  const messageRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    const title = titleRef.current.value
    const message = messageRef.current.value
    const data = {
      id: new Date(),
      title,
      message,
      editing: false,
    }

    dispatch({
      type: "ADD_POST",
      data,
    })

    titleRef.current.value = ""
    messageRef.current.value = ""
  }
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={titleRef}
          required
          type="text"
          placeholder="Enter Post Title"
        />
        <br />
        <br />
        <textarea
          ref={messageRef}
          required
          rows="5"
          cols="28"
          placeholder="Enter Post"
        />
        <br />
        <br />
        <button>Post</button>
      </form>
    </div>
  )
}

export default CreatePost
