import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';

export const QuestionTitle = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="paragraph-semibold text-dark400_light800">
            Question Title <span className="text-primary-500">*</span>
          </FormLabel>

          <FormControl className="mt-3.5 ">
            <Input
              className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark400_light700 min-h-[56px] border"
              {...field}
            />
          </FormControl>

          <FormDescription className="body-regular mt-2.5 text-light-500">
            Be specific and imagine you&apos;re asking a question to another
            person.
          </FormDescription>

          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};
