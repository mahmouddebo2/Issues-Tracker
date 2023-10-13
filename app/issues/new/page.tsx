"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssuesForm {
  title: string;
  description: string;
}

const NewIssuesPage = () => {
  const router = useRouter()
  const { register, control, handleSubmit } = useForm<IssuesForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async(data) =>{
      await  axios.post('/api/issues', data)
      router.push('/issues')
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
  );
};

export default NewIssuesPage;
