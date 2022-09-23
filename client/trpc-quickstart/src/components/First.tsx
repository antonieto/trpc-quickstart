import { blogsTrpc } from "../api/blogs";

import React from 'react'

const First = () => {

  const blogs = blogsTrpc.listBlogs.useQuery();

  if (!blogs.data) return <div> Loading... </div>;

  return (
    <div>
      {blogs.data.map(blog => (
        <div key={blog.id}>
          {blog.body}
        </div>
      ))}
    </div>
  )
}

export default First