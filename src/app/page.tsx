import {Suspense} from "react";
import {dehydrate,HydrationBoundary} from "@tanstack/react-query";
import {getQueryClient, trpc} from "@/trpc/server";
import {Client} from "./client";
// import {Button} from "@/components/ui/button";
import {useTRPC} from "@/trpc/client"
import {useQuery} from "@tanstack/react-query";   
const page = async()=> {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.hello.queryOptions({text:"Hello!"}))
  
  
  return (
    <HydrationBoundary state = {dehydrate(queryClient)}>
      <Suspense fallback = {<p>loading...</p>}>
        <Client />
      </Suspense>

    </HydrationBoundary>
      
  )
}

export default page;