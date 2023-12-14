"use client";
import { likePost } from "@/lib/actions/thread.actions";
import Image from "next/image";
import { useState } from "react";


interface LikeProps {
  currentUserId:string,
  threadId:string,
  likes:Record<string, boolean>,
}
const LikePost = ({ currentUserId,threadId,likes }: LikeProps) => {

  const likesCount = Object.values(likes).filter((liked) => liked).length;
  const isLiked = Boolean(likes[currentUserId]);
  const [likeCount, setLikeCount] = useState<number>(likesCount);
  const [isLike, setIsLike] = useState<boolean>(isLiked);
  

    
    const handleLike=async()=>{
      try {
        const updateLikeCount = await likePost(threadId, currentUserId);
  
        // Update the like count display with the actual count
        // You may need to store the like count in the component state
        setLikeCount( updateLikeCount);
        setIsLike((prev)=> !prev);
        
      } catch (error:any) {
        console.error('Error liking post:', error.message);
      }
        
    }
  return (

        <div className="flex flex-row gap-1 mr-1">
          <Image
          src={isLike ? "/assets/heart-filled.svg" : "/assets/heart-gray.svg"}
          alt={isLike ? "liked" : "unliked"}
          width={24}
          height={24}
          className="cursor-pointer object-contain" 
          onClick={handleLike}
        />
        <p className="text-slate-400">{likeCount}</p>
        </div>
    
  );
};

export default LikePost;
