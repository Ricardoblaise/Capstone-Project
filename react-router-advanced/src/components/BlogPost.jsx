import React from "react";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return (
    <>
      <h2>Blog Post {id}</h2>
      <p>
        This is the blog post with ID: {id}.
        <Link to="/">Go back to Homepage</Link>
      </p>
    </>
  )
};

export default BlogPost;