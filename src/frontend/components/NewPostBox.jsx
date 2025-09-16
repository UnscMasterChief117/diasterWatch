import { useState } from "react";

export default function NewPostBox({ onPost }) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!content.trim()) return;
    onPost(content);
    setContent("");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col space-y-3 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/50?img=12"
          alt="Your avatar"
          className="w-12 h-12 rounded-full border-2 border-red-500 dark:border-orange-400"
        />
        <textarea
          className="flex-1 resize-none p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400 dark:focus:ring-orange-400 transition placeholder-gray-400 dark:placeholder-gray-300"
          rows={3}
          placeholder="Share your disaster update..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-red-500 to-orange-500 dark:from-orange-400 dark:to-red-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transform transition"
        >
          Post
        </button>
      </div>
    </div>
  );
}
