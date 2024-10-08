import CreatePostForm from '../../components/forms/CreatePostForm';
import { handleEdit } from './actions';

const EditPostPage = async ({ params }: { params: { id: string } }) => {
  const postId = Number(params.id);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/posts/${postId}`);
  const post = await res.json();

  return (
    <div className="container relative mx-auto max-w-lg p-4">
      <h1 className="mb-4 text-center text-2xl font-semibold">Edit a post</h1>
      <CreatePostForm
        post={post}
        onSubmit={handleEdit}
      />
    </div>
  );
};

export default EditPostPage;
