import { Link, useParams } from "react-router-dom";

function BlogDetails({ blogs }) {
  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return (
      <div className="not-found">
        <h1>Blog Not Found</h1>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  return (
    <main className="details-page">
      <img
        className="details-image"
        src={blog.image}
        alt={blog.title}
      />

      <span className="category">{blog.category}</span>

      <h1>{blog.title}</h1>

      <p className="author">By {blog.author}</p>

      <p className="details-content">{blog.content}</p>

      <p>❤️ {blog.likes} Likes</p>

      <Link to="/" className="read-btn">
        ← Back to Blogs
      </Link>
    </main>
  );
}

export default BlogDetails;