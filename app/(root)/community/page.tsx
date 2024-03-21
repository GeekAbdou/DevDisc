import LocalSearchBar from '@/components/shared/search/LocalSearchBar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UserFilters } from '@/constants/filters';
import Filter from '@/components/shared/Filters/Filters';
import { SearchParamsProps } from '@/types';
import type { Metadata } from 'next';
import { getAllUsers } from '@/lib/actions/user.action';
import UserCard from '@/components/cards/UserCard';

export const metadata: Metadata = {
  title: 'Community | Div Discussion',
  description: 'Community of Div Discussion',
};

export default async function Community({ searchParams }: SearchParamsProps) {
  const result = await getAllUsers({});

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Users</h1>
        <Link href={'/all-users'} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[40px] rounded-lg px-4 py-3 !text-light-900">
            All Users
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Amazing People"
          otherClasses="flex-1"
        />

        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No User yet</p>
            <Link href="/sign-up" className="mt-2 font-bold text-accent-blue">
              Join to be the first!
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
