import React, { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);

  // Mengambil data menggunakan GET request saat komponen pertama kali di-render
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data.slice(0, 5))) // Ambil 5 post pertama
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Menambahkan post baru ke dalam list post
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Posts</h1>
      {/* Form untuk membuat post baru */}
      <PostForm addPost={addPost} />
      {/* Menampilkan list post */}
      <PostList posts={posts} />
    </div>
  );
}

export default App;
