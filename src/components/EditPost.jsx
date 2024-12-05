import React, { useRef } from "react"
import { useDispatch } from "react-redux"

const EditPost = ({ id, post }) => {
  const dispatch = useDispatch() // Access the dispatch function
  const titleRef = useRef(null) // Ref for the title input
  const messageRef = useRef(null) // Ref for the message textarea

  const handleEdit = e => {
    e.preventDefault()
    const newTitle = titleRef.current.value
    const newMessage = messageRef.current.value

    console.log("newTitle:", newTitle)
    const data = {
      newTitle,
      newMessage,
    }

    dispatch({ type: "UPDATE_POST", id: post.id, data }) // Dispatch the update action
  }

  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          required
          type="text"
          ref={titleRef}
          defaultValue={post.title}
          placeholder="Enter Post Title"
        />
        <br />
        <br />
        <textarea
          required
          rows="5"
          ref={messageRef}
          defaultValue={post.message}
          cols="28"
          placeholder="Enter Post"
        />
        <br />
        <br />
        <button>Update</button>
      </form>
    </div>
  )
}

export default EditPost
