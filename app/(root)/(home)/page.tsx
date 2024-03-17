import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import NoResult from '@/components/shared/NoResult/NoResult';
// import QuestionCard from '@/components/cards/QuestionCard';
// import { getQuestions } from '@/lib/actions/question.action';
import { HomePageFilters } from '@/constants/filters';
import Filter from '@/components/shared/Filters/Filters';

export default async function Home() {
  // const result = await getQuestions({});

  // console.log('Home  result:', result.questions);
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href={'/ask-question'} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[40px] rounded-lg px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      {/* Card section */}
    </>
  );
}
