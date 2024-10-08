import { cn } from '@/lib/utils';

type PostButtonProps = {
  color: 'blue' | 'green' | 'red';
  postId: number;
  onClick: (postId: number) => void;
  children?: React.ReactNode;
};

const PostButton = ({ color, postId, onClick, children }: PostButtonProps) => {
  let colorStyles;

  switch (color) {
    case 'blue':
      colorStyles = 'bg-blue-500 hover:bg-blue-600';
      break;
    case 'green':
      colorStyles = 'bg-green-500 hover:bg-green-600';
      break;
    case 'red':
      colorStyles = 'bg-red-500 hover:bg-red-600';
      break;
  }

  return (
    <button
      onClick={() => onClick(postId)}
      className={cn(
        'rounded px-2 text-sm font-semibold text-white',
        colorStyles
      )}
    >
      {children}
    </button>
  );
};

export default PostButton;
