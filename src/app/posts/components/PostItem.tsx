'use client';
import React from 'react';
import { Post } from '@/types/Post';
import CommentItem from './CommentItem';
import Link from 'next/link';
// import PostButton from './PostButton';

export default function PostItem({
  post,
  deletePost,
  editPost,
}: {
  post: Post;
  deletePost: (postId: number) => void;
  editPost: (postId: number) => void;
}) {
  return (
    <li
      key={post.id}
      className="mb-4 rounded-lg border bg-gray-200 p-6 shadow-md"
    >
      <div className="mb-4 flex items-center">
        {/* <img src={post.userAvatar} alt={post.user} className="w-10 h-10 rounded-full mr-4" /> */}
        <div>
          <h2 className="text-lg font-semibold">{post.user}</h2>
          <p className="text-sm text-gray-500">
            {/* {new Date(post.dateAdded).toLocaleDateString()} */}
            {post.dateAdded}
          </p>
        </div>
      </div>
      <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
      <p className="mb-4 text-gray-700">{post.message}</p>
      <p className="mb-4 text-gray-500">{post.amountLikes} 👍</p>
      <Link
        href={`/posts/${post.id}`}
        className="rounded border border-slate-400 p-2 text-sm text-slate-500 hover:text-slate-600"
      >
        Read more
      </Link>
      <div className="mb-4 flex space-x-4">
        {/* <PostButton color="blue" onClick={editPost} postId={post.id}>Update</PostButton> */}
        {/* <PostButton color="red" onClick={deletePost} postId={post.id}>Delete</PostButton> */}
      </div>
      <details className="mt-4">
        <summary className="cursor-pointer text-xl font-semibold">
          Comments
        </summary>
        <ul className="mt-2 space-y-2">
          {post.comments.map((comment, index) => (
            <CommentItem
              key={index}
              comment={comment}
              index={index}
            />
          ))}
        </ul>
      </details>
    </li>
  );
}
