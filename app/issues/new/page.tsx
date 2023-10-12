"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuesPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button>Submit New Issues</Button>
    </div>
  );
};

export default NewIssuesPage;
