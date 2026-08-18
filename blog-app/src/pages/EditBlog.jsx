import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog({ blogs, updateBlog }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((blog) => blog.id === Number(id));

  const [form, setForm] = useState(blog);

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateBlog(form);

    navigate(`/blog/${id}`);
  };

  return (
    <main className="form-page">
      <h1>Edit Blog</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="author"
          value={form.author}
          onChange={handleChange}
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
        />

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
        />

        <textarea
          name="content"
          rows="10"
          value={form.content}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Update Blog
        </button>
      </form>
    </main>
  );
}

export default EditBlog;