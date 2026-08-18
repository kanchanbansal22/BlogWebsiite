import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog({ addBlog }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    image: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.content
    ) {
      alert("Please fill all required fields.");
      return;
    }

    addBlog(form);

    navigate("/");
  };

  return (
    <main className="form-page">
      <h1>Create New Blog</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Blog title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="author"
          placeholder="Author name"
          value={form.author}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <textarea
          name="content"
          placeholder="Write your blog..."
          rows="10"
          value={form.content}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Publish Blog
        </button>
      </form>
    </main>
  );
}

export default CreateBlog;