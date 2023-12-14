"use client";
import Image from "next/image";


const Repost = () => {
    const handleRepost = async () => {
        try {
        
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
        className="cursor-pointer object-contain"
        onClick={handleRepost}
      />
  );
};

export default Repost;
