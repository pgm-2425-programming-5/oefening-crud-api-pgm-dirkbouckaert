import React from 'react';
import { Post } from '@/types/Post';
import PostItem from './components/PostItem';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function fetchPosts(): Promise<Post[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data = await response.json();
  // console.log('data:', data);
  return data.posts;
}

export default async function PostsPage() {
  const posts = await fetchPosts();

  async function deletePost(postId: number) {
    'use server';
    // const confirmed = confirm('Are you sure you want to delete this post?');
    if (true) {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/posts/${postId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          console.log('Post deleted successfully');
          revalidatePath('/posts'); // Update cached posts
          redirect('/posts');
          // Optionally, you can add logic to remove the post from the UI
        } else {
          // alert('Failed to delete the post');
          console.log('Failed to delete the post');
        }
      } catch (error) {
        console.error('Error deleting the post:', error);
        // alert('An error occurred while deleting the post');
      }
    }
  }

  async function editPost(postId: number) {
    'use server';
    redirect(`/posts/edit/${postId}`);
  }

  return (
    <div className="container relative mx-auto p-4">
      <Link
        href="/posts/create"
        className="absolute right-4 top-4 rounded border border-slate-400 p-2 text-sm text-slate-500 hover:text-slate-600"
      >
        Add a post
      </Link>
      <h1 className="mb-4 text-3xl font-bold">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            deletePost={deletePost}
            editPost={editPost}
          />
        ))}
      </ul>
    </div>
  );
}
