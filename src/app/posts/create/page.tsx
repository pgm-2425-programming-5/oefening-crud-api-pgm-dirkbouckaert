'use client';

import { handleSubmit } from './actions';
import CreatePostForm from '../components/forms/CreatePostForm';

const CreatePostPage = () => {
  return (
    <div className="container relative mx-auto max-w-lg p-4">
      <h1 className="mb-4 text-center text-2xl font-semibold">Add a post</h1>
      <CreatePostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePostPage;
