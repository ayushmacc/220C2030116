import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://20.244.56.144/test";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/posts`).then((response) => {
      const sortedPosts = response.data.posts.sort((a, b) => b.commentCount - a.commentCount);
      setPosts(sortedPosts);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
            <p className="text-blue-500 mt-2">Comments: {post.commentCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
