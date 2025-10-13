"use client"
import {Button} from "@/components/ui/button";
import {useTRPC} from "@/trpc/client"
import {useQuery} from "@tanstack/react-query";   
const page = ()=> {
  const trpc = useTRPC();
  
  const { data } = useQuery(trpc.hello.queryOptions({ text: "Hello!"}));
  return (
    <div>
      {data?.greeting}
    </div>
  )
}

export default page;