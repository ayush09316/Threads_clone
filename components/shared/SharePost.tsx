
import Image from "next/image";

const SharePost = () => {
  return (
    <Image
      src="/assets/share.svg"
      alt="reply"
      width={24}
      height={24}
      className="cursor-pointer object-contain"
    />
  );
};

export default SharePost;
