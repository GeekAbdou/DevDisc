import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'; // Removed FormMessage import as it's not used
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import React from 'react';

export const QuestionTags = () => {
  const { control, setError, setValue, clearErrors, trigger } =
    useFormContext(); // Destructured setError, setValue, clearErrors, and trigger from useFormContext

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any,
  ) => {
    if (e.key === 'Enter' && field.name === 'tags') {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();
      if (tagValue !== '') {
        if (tagValue.length > 15) {
          setError('tags', {
            type: 'maxLength',
            message: 'Tag must be less than 15 characters',
          });
        } else {
          if (!field.value.includes(tagValue)) {
            setValue('tags', [...field.value, tagValue]);
            tagInput.value = '';
            clearErrors('tags');
          } else {
            trigger();
          }
        }
      }
    }
  };

  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);
    setValue('tags', newTags);
  };

  return (
    <FormField
      control={control}
      name="tags"
      render={({ field }) => (
        <FormItem className="flex w-full flex-col">
          <FormLabel className="paragraph-semibold text-dark400_light800">
            Tags <span className="text-primary-500">*</span>
          </FormLabel>

          <FormControl className="mt-3.5 ">
            <>
              <Input
                className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark400_light700 min-h-[56px] border"
                placeholder="Add tags..."
                onKeyDown={(e) => handleInputKeyDown(e, field)}
              />
              {field.value.length > 0 && (
                <div className="flex-start mt-2.5 gap-2.5">
                  {field.value.map((tag: any) => (
                    <Badge
                      key={tag}
                      className="subtle-medium background-light800_dark300 text-light400_light500 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                    >
                      {tag}{' '}
                      <Image
                        src="/assets/icons/close.svg"
                        alt="close icon"
                        width={12}
                        height={12}
                        className="cursor-pointer object-contain invert-0 dark:invert"
                        onClick={() => handleTagRemove(tag, field)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </>
          </FormControl>

          <FormDescription className="body-regular mt-2.5 text-light-500">
            Add up to 3 tags to describe what your question is about. You need
            to press enter to add a tag.
          </FormDescription>
        </FormItem>
      )}
    />
  );
};
