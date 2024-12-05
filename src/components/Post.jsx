import React from "react"
import { useDispatch } from "react-redux"

const Post = ({ id, post }) => {
  //   console.log("post-", id, post)
  const dispatch = useDispatch()

  return (
    <div>
      <h2 className="title">{post.title}</h2>
      <p>{post.message}</p>
      <button
        onClick={() =>
          dispatch({
            type: "EDIT_POST",
            id: post.id,
          })
        }
      >
        Edit
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DELETE_POST",
            id: post.id,
          })
        }
      >
        Delete
      </button>
    </div>
  )
}

export default Post
