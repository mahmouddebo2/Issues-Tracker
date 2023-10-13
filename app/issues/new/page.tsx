"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssuesForm {
  title: string;
  description: string;
}

const NewIssuesPage = () => {
  const router = useRouter();
  const [error, setError] = useState('')
  const { register, control, handleSubmit } = useForm<IssuesForm>();

  return (
    <div className="max-w-xl">
      {error && <Callout.Root className="mb-5" color="red">
        <Callout.Text >
          {error}
        </Callout.Text>
        </Callout.Root>}
   
    <form
      className=" space-y-3"
      onSubmit={handleSubmit(async(data) =>{
        try {
          await  axios.post('/api/issues', data)
          router.push('/issues')
          
        } catch (error) {
          setError('An unexpected error occurred.')
          
        }
        
      } )}
    >
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Reply to comment…" {...field} />
        )}
      />
      <Button>Submit New Issues</Button>
    </form>
    </div>
  );
};

export default NewIssuesPage;
