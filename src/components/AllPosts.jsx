import { useSelector } from "react-redux"

import Post from "./Post"
import EditComponent from "./EditPost"

const AllPosts = () => {
  const posts = useSelector(state => state)
  //   console.log(posts)

  return (
    <div>
      {posts.map(post => {
        return (
          <div key={post.id}>
            {post.editing ? (
              <EditComponent id={post.id} post={post} />
            ) : (
              <Post id={post.id} post={post} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default AllPosts
