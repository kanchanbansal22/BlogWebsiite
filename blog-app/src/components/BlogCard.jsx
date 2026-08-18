import { Link } from "react-router-dom";

function BlogCard({ blog, deleteBlog, likeBlog }) {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />

      <div className="blog-content">
        <span className="category">{blog.category}</span>

        <h2>{blog.title}</h2>

        <p className="author">By {blog.author}</p>

        <p>
          {blog.content.substring(0, 120)}
          {blog.content.length > 120 ? "..." : ""}
        </p>

        <div className="card-actions">
          <Link to={`/blog/${blog.id}`} className="read-btn">
            Read More
          </Link>

          <button onClick={() => likeBlog(blog.id)}>
            ❤️ {blog.likes}
          </button>

          <Link to={`/edit/${blog.id}`} className="edit-btn">
            Edit
          </Link>

          <button
            className="delete-btn"
            onClick={() => deleteBlog(blog.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;