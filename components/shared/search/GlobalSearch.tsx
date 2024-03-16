'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const GlobalSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[50px] items-center rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          height={24}
          width={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search globally"
          value={searchValue}
          onChange={handleInputChange}
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
