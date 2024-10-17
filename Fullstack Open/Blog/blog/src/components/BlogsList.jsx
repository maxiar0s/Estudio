const BlogList = ({ blogs }) => {
  return (
    <div className="">
      {blogs.map((blog, index) => (
        <div key={index} className="border border-2 ">
          <p className="d-inline-flex gap-1">
            <a
              className="btn btn-primary"
              data-bs-toggle="collapse"
              href={`#collapseExample${index}`}
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              {blog.title}
            </a>
          </p>
          <div className="collapse" id={`collapseExample${index}`}>
            <div className="card card-body">
              <p>{blog.author}</p> <p>{blog.url}</p> <p>{blog.likes}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
