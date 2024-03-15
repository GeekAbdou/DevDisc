'use client';
import React, { useRef } from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Editor } from '@tinymce/tinymce-react';
import { useFormContext } from 'react-hook-form';

export const QuestionEditor = () => {
  const { control } = useFormContext();
  const editorRef = useRef(null);

  return (
    <FormField
      control={control}
      name="explanation"
      render={({ field }) => (
        <FormItem className="flex w-full flex-col gap-3">
          <FormLabel className="paragraph-semibold text-dark400_light800">
            Detailed explanation of your problem{' '}
            <span className="text-primary-500">*</span>
          </FormLabel>

          <FormControl className="mt-3.5 ">
            {/* //todo: add an editor component */}
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
              onBlur={field.onBlur}
              onEditorChange={(content) => field.onChange(content)}
              onInit={(evt, editor) => {
                // @ts-ignore
                editorRef.current = editor;
              }}
              initialValue=""
              init={{
                height: 350,
                menubar: false,
                plugins: [
                  'advlist',
                  'autolink',
                  'lists',
                  'link',
                  'image',
                  'charmap',
                  'preview',
                  'anchor',
                  'searchreplace',
                  'visualblocks',
                  'codesample',
                  'fullscreen',
                  'insertdatetime',
                  'media',
                  'table',
                ],
                toolbar:
                  'undo redo |  ' +
                  'codesample | bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist ',
                content_style: 'body { font-family:Inter; font-size:16px }',
              }}
            />
          </FormControl>

          <FormDescription className="body-regular mt-2.5 text-light-500">
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </FormDescription>

          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};
