import React from "react";

function PostList({ posts }) {
  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((post) => (
          <li key={post.id} className="mb-4 p-4 bg-gray-100 rounded">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </ul>
  );
}

export default PostList;
