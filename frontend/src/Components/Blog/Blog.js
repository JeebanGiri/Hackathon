import React from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

function Blog() {
  let navigate = useNavigate();
  return (
    <>
      <form className="form">
        <div className="blogPost">
          <div className="form-items">
            <div>
              <h3>Title: </h3> <br />
              <input
                type="text"
                className="title"
                placeholder="Input your Title"
              />
            </div>
            <div className="desc">
              <h3 >Description: </h3> <br />
              <textarea className="description" rows="5" cols="77"  placeholder="your description"/>
            </div>
            <div className="file-btn">
              <p className="select-image">Select Image</p>
              <input type="file"/>
            </div>
          </div>
          <button className="submit-btn" type="submit" onClick={()=>navigate='/ViewBlog'}>
            Add Post
          </button>
        </div>
      </form>
    </>
  );
}

export default Blog;
