'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { questionsSchema } from '@/lib/validation';
import { QuestionTitle } from './QuestionTitle';
import { QuestionEditor } from './QuestionEditor';
import { QuestionTags } from './QuestionTags';

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
        <QuestionTitle />
        <QuestionEditor />
        <QuestionTags />

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
