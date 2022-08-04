import React, { useState } from "react";
import posts from "./posts";
import "./task4.css";

function Task4() {

  const [query, setQuery] = useState("");
  // console.log(posts.filter((post)=>post.username.includes("Username3")));

  return (
    <>
      <h1>Blog Post</h1>
      <div className="blog-filter">
        <div className="field-wrap">
          <select onChange={(e) => setQuery(e.target.value)}>
            <option>Select Username</option>
            {posts.map(a => {
              return (
                <option>
                  {a.username}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      <div className="post-list">
        <ul>
        {posts.filter((post)=>post.username.includes(query)).map(el => {
          return (
            <li key={el.no}>
              <div className="img-block"><img src={el.image} alt={el.username} /></div>
              <h4>{el.username}</h4>
              <p>{el.post}</p>
            </li>
          )
        })}
        </ul>
      </div>
    </>
  )
}

export default Task4;