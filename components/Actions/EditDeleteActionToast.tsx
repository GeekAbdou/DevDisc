'use client';

import { toast } from '@/components/ui/use-toast';
import { deleteAnswer } from '@/lib/actions/answer.action';
import { deleteQuestion } from '@/lib/actions/question.action';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
  type: string;
  itemId: string;
}
const EditDeleteActionToast = ({ type, itemId }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleEdit = () => {
    router.push(`/questions/edit/${JSON.parse(itemId)}`);
  };
  const handleDelete = async () => {
    if (type === 'Question') {
      // delete Question
      try {
        const parsedItemId = JSON.parse(itemId);
        // Proceed with the rest of your code using parsedItemId

        console.log('parsedItemId', parsedItemId);
        console.log('pathname', pathname);

        await deleteQuestion({ questionId: parsedItemId, path: pathname });
      } catch (error) {
        console.error('Error parsing itemId as JSON:', error);
        // Handle the error appropriately, such as showing a message to the user or logging it
      }
      toast({
        title: ` Question Deleted `,
        variant: 'destructive',
        description: 'Your question has been deleted successfully',
      });
    } else if (type === 'Answer') {
      // delete Answer
      await deleteAnswer({ answerId: JSON.parse(itemId), path: pathname });

      toast({
        title: `Answer Deleted `,
        variant: 'destructive',
        description: 'Your answer has been deleted successfully',
      });
    }
  };
  return (
    <div className="flex items-center justify-end gap-3 max-sm:w-full">
      {type === 'Question' && (
        <Image
          src="/assets/icons/edit.svg"
          alt="Edit"
          width={14}
          height={14}
          className="cursor-pointer object-contain"
          onClick={handleEdit}
        />
      )}
      <Image
        src="/assets/icons/trash.svg"
        alt="Delele"
        width={14}
        height={14}
        className="cursor-pointer object-contain"
        onClick={handleDelete}
      />
    </div>
  );
};
export default EditDeleteActionToast;
