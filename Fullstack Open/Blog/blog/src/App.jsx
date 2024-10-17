import { useEffect, useState } from "react";
import blogService from "./services/blog";

//--Components--
import BlogList from "./components/BlogsList";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    blogService.getAll().then((allBlogs) => {
      setBlogs(allBlogs);
    });
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredBlogs = blogs.filter((blog) => {
    return (
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.author.toLowerCase().includes(search.toLowerCase())
    );
  });

  console.log(filteredBlogs);

  return (
    <div className="container">
      <h1 className="">Blogs</h1>
      <input onChange={handleChange} value={search} />
      <BlogList filteredBlogs={filteredBlogs} />
    </div>
  );
}

export default App;

// {blogs.map((blog) => (
//   <p key={blog.id}>{blog.title}</p>
// ))}
