"use client"

import { useTRPC } from "@/trpc/client";
import {Button} from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
const page = ()=> {
  const trpc = useTRPC();
  
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Background job started")
    }
  }));
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button disabled = {invoke.isPending} onClick={() => invoke.mutate({ text: "kumareh"})}>
        Invoke background job
      </Button>
    </div>
  )
}

export default page;