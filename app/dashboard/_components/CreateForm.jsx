"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AiChatSessions } from "@/configs/AiModal";

const PROMPT = "On the basis of the description, please give me a form in JSON format with form title, form subheading, form field, form name, placeholder name, form label, fieldType, and field required.";

function CreateForm() {
  const [openDialog, setOpenDialog] = useState(false);
  const [userInput, setUserInput] = useState("");

  const onCreateForm = async () => {
    console.log(userInput);

 
    const result = AiChatSessions.sendMessage("Description"+userInput+PROMPT);
    console.log(result.response.text());

    // Further processing or handling of the generated form can be done here
  };

  return (
    <div>
      <Button onClick={() => setOpenDialog(true)}>+ Create Form</Button>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Form</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new form.
            </DialogDescription>
          </DialogHeader>
          <Textarea
            className="my-2"
            onChange={(event) => setUserInput(event.target.value)}
            placeholder="Write descriptions of your form"
            value={userInput}
          />
          <div className="flex gap-2 my-3 justify-end">
            <Button variant="destructive" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button onClick={onCreateForm}>Create</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateForm;