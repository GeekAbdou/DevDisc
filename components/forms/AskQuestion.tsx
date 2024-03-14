'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { questionsSchema } from '@/lib/validation';

function onSubmit(values: z.infer<typeof questionsSchema>) {
  console.log(values);
}

export default function Questions() {
  const form = useForm<z.infer<typeof questionsSchema>>({
    resolver: zodResolver(questionsSchema),
    defaultValues: {
      title: '',
      explanation: '',
      tags: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>

              <FormControl className="mt-3.5 ">
                <Input className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark400_light700 min-h-[56px] border" />
              </FormControl>

              <FormDescription className="body-regular mt-2.5 text-light-500">
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription>

              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          className="primary-gradient rounded-lg text-light-900"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
