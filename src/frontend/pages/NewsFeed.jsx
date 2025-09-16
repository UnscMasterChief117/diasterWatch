import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

// NewPostBox component (modern + compact)
function NewPostBox({ onPost }) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!content.trim()) return;
    onPost(content);
    setContent("");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 flex flex-col space-y-2 transition-colors duration-300 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/50?img=12"
          alt="Your avatar"
          className="w-10 h-10 rounded-full border-2 border-red-500 dark:border-orange-400"
        />
        <textarea
          className="flex-1 resize-none p-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400 dark:focus:ring-orange-400 transition placeholder-gray-400 dark:placeholder-gray-300 text-sm"
          rows={2}
          placeholder="Share your disaster update..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-red-500 to-orange-500 dark:from-orange-400 dark:to-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:scale-105 transform transition shadow-sm"
        >
          Post
        </button>
      </div>
    </div>
  );
}

// Card component
function Card({ children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5">
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return <div className="p-3">{children}</div>;
}

// Main NewsFeed
export default function NewsFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "John Doe",
      avatar: "https://i.pravatar.cc/50?img=1",
      time: "2h ago",
      content: "Had a great day exploring the Northshore trails today!",
      image: "https://source.unsplash.com/600x400/?nature,forest",
      liked: false,
      type: "Update",
    },
    {
      id: 2,
      author: "Tammie Smith",
      avatar: "https://i.pravatar.cc/50?img=2",
      time: "5h ago",
      content: "Excited for the Northshore Connection launch 🚀",
      image: null,
      liked: false,
      type: "Alert",
    },
  ]);

  const addPost = (content) => {
    const post = {
      id: posts.length + 1,
      author: "You",
      avatar: "https://i.pravatar.cc/50?img=12",
      time: "Just now",
      content,
      image: null,
      liked: false,
      type: "Report",
    };
    setPosts([post, ...posts]);
  };

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 pt-28">
      {/* New Post Box */}
      <NewPostBox onPost={addPost} />

      {/* Posts Feed */}
      {posts.map((post) => (
        <Card key={post.id}>
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{post.author}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">{post.time}</p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-100 dark:bg-red-700 text-red-700 dark:text-red-200">
              {post.type}
            </span>
          </div>

          {/* Content */}
          <CardContent>
            <p className="text-gray-800 dark:text-gray-200 text-sm mb-2">{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                alt="post"
                className="w-full h-48 object-cover rounded-lg mb-2 transition-opacity duration-500 opacity-90 hover:opacity-100"
              />
            )}
            <div className="flex justify-around text-gray-500 dark:text-gray-400 text-sm">
              <button
                onClick={() => handleLike(post.id)}
                className={`flex items-center gap-1 transition ${
                  post.liked ? "text-red-500" : "hover:text-red-500"
                }`}
              >
                <Heart className="w-4 h-4" /> {post.liked ? "Liked" : "Like"}
              </button>
              <button className="flex items-center gap-1 hover:text-red-500 transition">
                <MessageCircle className="w-4 h-4" /> Comment
              </button>
              <button className="flex items-center gap-1 hover:text-red-500 transition">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
