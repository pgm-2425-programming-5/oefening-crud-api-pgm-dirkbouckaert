'use server';

import { Post } from '@/types/Post';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const handleEdit = async (editedPost: Post) => {
  console.log('editedPost:', editedPost);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/posts/${editedPost.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editedPost),
  });
  if (response.ok) {
    console.log('Post edited successfully');
    revalidatePath('/posts');
    redirect('/posts');
  } else {
    console.log('Failed to edit the post');
    // Optionally, you can add logic to display an error message to the user
  }
};
