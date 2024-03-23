import QuestionCard from '@/components/cards/QuestionCard';
import { getUserQuestions } from '@/lib/actions/user.action';
import { useEffect, useState } from 'react';

interface QuestionTabProps {
  userId: string;
  clerkId?: string | null;
  searchProps?: { [key: string]: string | undefined };
}

const QuestionTab = ({ searchProps, userId, clerkId }: QuestionTabProps) => {
  const [userQuestions, setUserQuestions] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserQuestions = async () => {
      try {
        const { userQuestions: fetchedUserQuestions } = await getUserQuestions({
          userId,
          page: searchProps?.page ? +searchProps.page : 1,
        });
        setUserQuestions(fetchedUserQuestions);
      } catch (error) {
        console.error('Error fetching user questions:', error);
      }
    };

    fetchUserQuestions();
  }, [userId, searchProps?.page]);

  return (
    <>
      {userQuestions.map((question) => (
        <QuestionCard
          key={question._id}
          _id={question._id}
          clerkId={clerkId || undefined} // Pass undefined if clerkId is null
          title={question.title}
          tags={question.tags}
          author={question.author}
          upvotes={question.upvotes.length}
          views={question.views}
          answers={question.answers}
          createdAt={question.createdAt}
        />
      ))}
    </>
  );
};

export default QuestionTab;
