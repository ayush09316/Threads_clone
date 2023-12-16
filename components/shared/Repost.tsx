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
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const handleRepost = async () => {
    try {
      await repostThread(threadId, userId);
      setIsReposted(true);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 900); 

    } catch (error: any) {
      console.error('Error reposting thread:', error.message);
    }
  };

  return (
    <>
    {showNotification? (
      <div className="notification">
        <span role="img" aria-label="check-mark">
          ✅
        </span>
      </div>
    ):(
      <Image
      src={`/assets/repost.svg`}
      alt="repost"
      width={24}
      height={24}
      className={`cursor-pointer object-contain ${isReposted ? 'opacity-50' : ''}`}
      onClick={isReposted ? undefined : handleRepost}
    />
    )}
  </>
  );
};

export default Repost;
