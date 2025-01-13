'use client'
import React, { useState } from "react";

const CommentBox: React.FC = () => {
  const [name, setName] = useState<string>(""); // To hold the user's name
  const [comment, setComment] = useState<string>(""); // To hold the user's comment
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]); // To hold the list of comments

  // Handle form submission
  const handleCommentSubmit = () => {
    if (name.trim() === "" || comment.trim() === "") return; // Prevent empty name or comment
    setComments([...comments, { name, text: comment }]); // Add new comment to the list
    setName(""); // Clear name field
    setComment(""); // Clear comment field
  };

  return (
    <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Leave a Comment</h2>

      {/* Name Input */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Comment Input */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your Comment"
        rows={3}
        className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>

      {/* Submit Button */}
      <button
        onClick={handleCommentSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Post Comment
      </button>

      {/* Comments Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Comments:</h3>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((cmt, index) => (
              <li
                key={index}
                className="p-4 border rounded shadow-sm bg-gray-50"
              >
                <p className="font-bold text-gray-800">{cmt.name}</p>
                <p className="text-gray-600">{cmt.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
