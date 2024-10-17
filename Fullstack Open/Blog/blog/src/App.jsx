import { useEffect, useState } from "react";
import blogService from "./services/blog";

//--Components--
import BlogList from "./components/BlogsList";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    blogService.getAll().then((allBlogs) => {
      setBlogs(allBlogs);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="">Blogs</h1>
      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;

// {blogs.map((blog) => (
//   <p key={blog.id}>{blog.title}</p>
// ))}
