import { useState, useEffect } from "react";

export default function Topic6_AsyncAwait() {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    async function getUser() {
      const response = await fetch("https://api.github.com/users/reedbarger");
      const data = await response.json();
      setAvatar(data.avatar_url);
    }
    getUser();
  }, []);

  return (
    <div>
      <h2>Topic 6: Async & Await</h2>
      {avatar && <img src={avatar} width={150} />}
    </div>
  );
}

// API calls aur asynchronous tasks ko handle karne ke liye Promises use hote hain.
// Async/await syntax asynchronous code ko simple synchronous jaisa bana deta hai.
// React me data fetch karne ke liye useEffect + async function ka combination common hai.
// Ye concepts real-world React apps ke liye must-know hote hain.
