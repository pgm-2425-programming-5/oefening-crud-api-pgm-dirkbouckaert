import { Comment, Post } from '@/types/Post';
import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params }: Props) {
  async function getPost() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/posts/${params.id}`);
    const data = await response.json();
    return data;
  }
  const post = await getPost();

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-md">
      <div className="mb-6">
        <Link
          href="/posts"
          className="rounded border border-slate-200 p-2 text-sm text-slate-500 hover:text-slate-600"
        >
          ← Back to Posts
        </Link>
      </div>
      {post.title && (
        <h1 className="mb-6 text-4xl font-extrabold text-gray-900">
          {post.title}
        </h1>
      )}
      <p className="mb-4 text-gray-500">
        By <span className="font-medium text-gray-700">{post.user}</span> on{' '}
        {new Date(post.dateAdded).toLocaleDateString()}
      </p>
      <p className="mb-6 text-lg text-gray-800">{post.message}</p>
      <div className="mb-6 flex items-center space-x-4">
        <span className="font-semibold text-blue-600">
          Likes: {post.amountLikes}
        </span>
        <span className="font-semibold text-green-600">
          Comments: {post.comments.length}
        </span>
      </div>
      <div>
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Comments</h2>
        {post.comments.map((comment: Comment, index: number) => (
          <div
            key={index}
            className="mb-4 rounded-lg border bg-gray-50 p-4"
          >
            <p className="font-semibold text-gray-800">{comment.user}</p>
            <p className="text-gray-700">{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
