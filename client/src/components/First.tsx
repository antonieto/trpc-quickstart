import { appTrpc } from "../api/trpc";

const First = () => {

  const blogs = appTrpc.blogs.listBlogs.useQuery();

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