import { useState } from "react";
import BlogCard from "../components/BlogCard";

function Home({ blogs, deleteBlog, likeBlog }) {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <section className="hero">
        <h1>Welcome to BlogSpace</h1>

        <p>
          Discover interesting stories, tutorials and ideas.
        </p>

        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section className="blogs-section">
        <h1>Latest Blogs</h1>

        {filteredBlogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          <div className="blog-grid">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                deleteBlog={deleteBlog}
                likeBlog={likeBlog}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;