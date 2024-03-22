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
import { useState } from 'react';
import { createQuestion } from '@/lib/actions/question.action';
import { usePathname } from 'next/navigation';

interface QuestionProps {
  mongoUserId: string;
}

export default function Question({ mongoUserId }: QuestionProps) {
  const form = useForm<z.infer<typeof questionsSchema>>({
    resolver: zodResolver(questionsSchema),
    defaultValues: {
      title: '',
      explanation: '',
      tags: [''],
    },
  });

  const type: any = 'create';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pathname = usePathname();

  async function onSubmit(values: z.infer<typeof questionsSchema>) {
    setIsSubmitting(true);
    console.log('Form values:', values);

    try {
      await createQuestion({
        title: values.title,
        content: values.explanation,
        tags: values.tags,
        author: JSON.parse(mongoUserId),
        path: pathname,
      });
      console.log('Question created successfully.');
      // router.push('/');
    } catch (error) {
      console.error('Error creating question:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <QuestionTitle />
        <QuestionEditor />
        <QuestionTags />

        <Button
          className="primary-gradient w-fit !text-light-900"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>{type === 'edit' ? 'Editing...' : 'Posting'}</>
          ) : (
            <>{type === 'edit' ? 'Edit Queston' : 'Ask a question'}</>
          )}
        </Button>
      </form>
    </Form>
  );
}
