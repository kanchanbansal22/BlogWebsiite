import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";

const initialBlogs = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "kanchan",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    content:
      "React is a popular JavaScript library for building modern user interfaces. It allows developers to create reusable components and manage application state efficiently.",
    likes: 10,
  },
  {
    id: 2,
    title: "Why Learn JavaScript?",
    author: "Kanchan",
    category: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content:
      "JavaScript is one of the most important technologies for web development. Learning JavaScript gives you a strong foundation for React and other frontend frameworks.",
    likes: 7,
  },
];

function App() {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");

    return savedBlogs ? JSON.parse(savedBlogs) : initialBlogs;
  });

  const saveBlogs = (updatedBlogs) => {
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const addBlog = (blog) => {
    const newBlog = {
      ...blog,
      id: Date.now(),
      likes: 0,
    };

    saveBlogs([...blogs, newBlog]);
  };

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    saveBlogs(updatedBlogs);
  };

  const updateBlog = (updatedBlog) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === updatedBlog.id ? updatedBlog : blog
    );

    saveBlogs(updatedBlogs);
  };

  const likeBlog = (id) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === id
        ? { ...blog, likes: blog.likes + 1 }
        : blog
    );

    saveBlogs(updatedBlogs);
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              blogs={blogs}
              deleteBlog={deleteBlog}
              likeBlog={likeBlog}
            />
          }
        />

        <Route
          path="/blog/:id"
          element={<BlogDetails blogs={blogs} />}
        />

        <Route
          path="/create"
          element={<CreateBlog addBlog={addBlog} />}
        />

        <Route
          path="/edit/:id"
          element={
            <EditBlog
              blogs={blogs}
              updateBlog={updateBlog}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;