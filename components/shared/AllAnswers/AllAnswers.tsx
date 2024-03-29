import { AnswerFilters } from '@/constants/filters';
import Filter from '@/components/shared/Filters/Filters';
import { getAnswers } from '@/lib/actions/answer.action';
import Link from 'next/link';
import Image from 'next/image';
import { getTimeStamp } from '@/lib/utils';
import ParseHTML from '../ParseHTML/ParseHTML';
import Votes from '@/components/shared/Votes/Votess';

interface Props {
  questionId: string;
  userId: string;
  totalAnswers: number;
  page?: number | string;
  filter?: string;
}

const AllAnswers = async ({
  questionId,
  userId,
  totalAnswers,
  page,
  filter,
}: Props) => {
  const { answers } = await getAnswers({
    questionId,
    page: page ? +page : 1,
    sortBy: filter,
  });

  console.log(answers);

  return (
    <div className="mt-11">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">{totalAnswers} Answers</h3>
        {/* Filters */}
        <Filter filters={AnswerFilters} />
      </div>
      {/* Dispay answers */}
      <div>
        {answers.map((answer) => (
          <article key={answer._id} className="text-dark200_light900">
            {/* SPAN ID */}
            <div className="mb-8 flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
              <Link
                href={`/profile/${answer.author.clerkId}`}
                className="flex flex-1 items-start gap-1 sm:items-center"
              >
                <Image
                  src={answer.author.picture}
                  alt="profile"
                  width={18}
                  height={18}
                  className="rounded-full object-cover max-sm:mt-0.5"
                />
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <p className="body-semibold text-dark300_light700">
                    {answer.author.name}{' '}
                  </p>
                  <p className="small-regular text-light400_light500 ml-2 mt-0.5 line-clamp-1">
                    answered {getTimeStamp(answer.createdAt)}
                  </p>
                </div>
              </Link>
              {/* Voting section */}
              <div className="flex justify-end">
                <Votes
                  type="Answer"
                  itemId={JSON.stringify(answer._id)}
                  userId={JSON.stringify(userId)}
                  upvotes={answer.upvotes.length}
                  hasupVoted={answer.upvotes.includes(userId)}
                  downvotes={answer.downvotes.length}
                  hasdownVoted={answer.downvotes.includes(userId)}
                />
              </div>
            </div>
            <ParseHTML data={answer.content} />
          </article>
        ))}
      </div>
      <div className="mt-10"></div>
    </div>
  );
};
export default AllAnswers;
