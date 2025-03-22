import { useEffect, useState } from "react";
import { fetchPosts } from "../api";

const LiveFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetchPosts().then(data => setFeed(data.slice(-10).reverse()));
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Live Feed</h1>
      {feed.map(post => (
        <div key={post.id} className="p-4 bg-gray-100 mb-2 rounded">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default LiveFeed;
