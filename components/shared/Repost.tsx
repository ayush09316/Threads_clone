"use client";
import { repostThread } from "@/lib/actions/thread.actions";
import Image from "next/image";
import { useState } from "react";

interface RepostProp {
  userId:string,
  threadId:string,
}

const Repost = ({threadId,userId}:RepostProp) => {
    const [isReposted, setIsReposted] = useState<boolean>(false);
    const handleRepost = async () => {
        try {
          console.log("userId before repostThread:", threadId);
          await repostThread(threadId, userId);
          setIsReposted(true);
        } catch (error:any) {
          console.error('Error reposting thread:', error.message);
        }
      };
  return (
    
      <Image
        src="/assets/repost.svg"
        alt="repost"
        width={24}
        height={24}
        className={`cursor-pointer object-contain ${isReposted && 'opacity-50'}`}
        onClick={handleRepost}
        
      />
        
  );
};

export default Repost;
