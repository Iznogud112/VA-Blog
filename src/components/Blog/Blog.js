import React, { useState, useEffect } from "react";

import "./Blog.css";

const BLOG_QUERY = `
{
  postsConnection {
    edges {
      node {
        createdAt
        slug
        title
        coverImage {
          url
        }
        content {
          text        
        }
      }  
    }    
  }      
}`;

function Blog() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-us-west-2.hygraph.com/v2/cl6wjnpdt4jtv01uqdjrs8zb6/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: BLOG_QUERY }),
      }
    )
      .then((response) => response.json())
      .then((data) => setBlog(data.data.postsConnection.edges));
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1 className="titleBlog">VA Blog</h1>
        <div className="blog">
          {blog.map((b) => (
            <div key={b.node.title}>
              <img className="blogImages" src={b.node.coverImage.url} alt="" />
              <h1 className="blogTitle">{b.node.title}</h1>
              <p className="blogContent">{b.node.content.text}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default Blog;
