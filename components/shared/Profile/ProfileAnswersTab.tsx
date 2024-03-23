import AnswerCard from '@/components/cards/ProfileAnswerCard';
import { getUserAnswers } from '@/lib/actions/user.action';

interface AnswersTabProps {
  userId: string;
  clerkId?: string | null;
  searchProps?: { [key: string]: string | undefined };
}

const AnswersTab = async ({
  searchProps,
  userId,
  clerkId,
}: AnswersTabProps) => {
  const { userAnswers } = await getUserAnswers({
    userId,
    page: searchProps?.page ? +searchProps?.page : 1,
  });

  return (
    <>
      {userAnswers.map((answer) => (
        <AnswerCard
          key={answer._id}
          clerkId={clerkId}
          _id={answer._id}
          question={answer.question}
          author={answer.author}
          upvotes={answer.upvotes.length}
          createdAt={answer.createdAt}
        />
      ))}
    </>
  );
};
export default AnswersTab;
