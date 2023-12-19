"use client";
import * as Dialog from "@radix-ui/react-dialog";
import {
  RedditShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramIcon,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  PinterestShareButton,
  PinterestIcon,
} from "next-share";
import Image from "next/image";

interface SharePostProps {
  threadId: string;
}

const SharePost = ({ threadId }: SharePostProps) => {
  const handleClick=()=>{
    navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/thread/${threadId}`);
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button title="share">
          <Image
            src="/assets/share.svg"
            alt="reply"
            width={24}
            height={24}
            className="cursor-pointer object-contain"
          />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-dark-3 p-[25px]  focus:outline-none">
          <Dialog.Title className="text-mauve12 mb-4 absolute top-2   text-[17px] text-white font-semibold">
            Share Thread
          </Dialog.Title>
          <div className="h-[1px] w-[100%] bg-white mt-6 mb-4"></div>
          <Dialog.Description className="text-white text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Found this gem and couldn't resist sharing it with you – enjoy the
            vibes!
          </Dialog.Description>

          <div className="flex flex-row gap-4">
            <WhatsappShareButton
              url={`${window.location.protocol}//${window.location.host}/thread/${threadId}`}
              title={
                "Found this gem and couldn't resist sharing it with you – enjoy the vibes!"
              }
              separator=" :: "
            >
              <WhatsappIcon size={35} round />
            </WhatsappShareButton>

            <LinkedinShareButton url={`${window.location.protocol}//${window.location.host}/thread/${threadId}`}>
              <LinkedinIcon size={35} round />
            </LinkedinShareButton>
            <TwitterShareButton
              url={`${window.location.protocol}//${window.location.host}/thread/${threadId}`}
              title={
                "Found this gem and couldn't resist sharing it with you – enjoy the vibes!"
              }
            >
              <TwitterIcon size={35} round />
            </TwitterShareButton>
            <TelegramShareButton
              url={`${window.location.protocol}//${window.location.host}/thread/${threadId}`}
              title={
                "Found this gem and couldn't resist sharing it with you – enjoy the vibes!"
              }
            >
              <TelegramIcon size={35} round />
            </TelegramShareButton>

            <RedditShareButton
              url={`${window.location.protocol}//${window.location.host}/thread/${threadId}`}
              title={
                "Found this gem and couldn't resist sharing it with you – enjoy the vibes!"
              }
            >
              <RedditIcon size={35} round />
            </RedditShareButton>

            <FacebookShareButton
              url={`${window.location.protocol}//${window.location.host}/thread/${threadId}`}
              quote={
                "Found this gem and couldn't resist sharing it with you – enjoy the vibes!"
              }
              hashtag={"#nextshare"}
            >
              <FacebookIcon size={35} round />
            </FacebookShareButton>

            <LineShareButton
              url={`${window.location.protocol}//${window.location.host}/thread/${threadId}`}
              title={
                "Found this gem and couldn't resist sharing it with you – enjoy the vibes!"
              }
            >
              <LineIcon size={35} round />
            </LineShareButton>

            <PinterestShareButton
              url={`${window.location.protocol}//${window.location.host}/thread/${threadId}`}
              media={
                "Found this gem and couldn't resist sharing it with you – enjoy the vibes!"
              }
            >
              <PinterestIcon size={35} round />
            </PinterestShareButton>
          </div>
          <Dialog.Description className="text-white text-mauve11 mt-[5%]  text-[15px] leading-normal">
            Or copy link
          </Dialog.Description>
          <div className="mt-[10px] flex justify-end">
            <div className="w-[100%] h-[45px] border-2 rounded-lg flex items-center justify-end p-2">
              <Image
                src={"/assets/link.svg"}
                alt={"link"}
                width={20}
                height={20}
                className="rotate-[135deg]"
              />
              <input
                type="text"
                title="link"
                value={`https://localhost:3000/thread/${threadId}`}
                className="border-none outline-none w-[100%] h-[100%] overflow-hidden bg-black text-white ml-2"
              />
              <Dialog.Close asChild>
                <button className="bg-green4 bg-white text-green11  focus:shadow-green7 inline-flex h-[30px] items-center justify-center rounded-[5px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none " onClick={handleClick}>
                  Copy
                </button>
              </Dialog.Close>
            </div>
          </div>
          <Dialog.Close asChild>
            <button
              className="bg-slate-800 hover:bg-slate-600 focus:shadow-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <p className="text-white font-semibold">x</p>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SharePost;
