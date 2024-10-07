'use server';

import { Post } from '@/types/Post';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const handleSubmit = async (newPost: Post) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/posts`, {
    method: 'POST',
    // cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });
  if (response.ok) {
    console.log('Post created successfully');
    revalidatePath('/posts');
    redirect('/posts');
  } else {
    console.log('Failed to create the post');
    // Optionally, you can add logic to display an error message to the user
  }
};
