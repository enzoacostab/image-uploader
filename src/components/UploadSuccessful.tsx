import useActions from "../hooks/useActions";
import {FaCircleCheck} from 'react-icons/fa6'
import { useImage } from "../hooks/useImage";
import { Context } from "../types";
import { toast } from "sonner";

export default function UploadSuccessful() {
  const {copyToClipboard, truncateUrl} = useActions()
  const {uploadedImageUrl, isCopied} = useImage() as Context

  if (isCopied) toast.success('Link copied to clipboard!')

  const displayUrl = truncateUrl(uploadedImageUrl);
  
  return (
    <section className="h-fit">
      <div className="flex flex-col gap-4 pb-6 items-center">
        <FaCircleCheck fill="#219653" size={42}></FaCircleCheck>
        <h3 className="m-0 text-[18px] tracking-[-0.04em] font-medium font-poppins text-[#4F4F4F] text-left inline-block">Uploaded Successfully!</h3>
      </div>
      <div className="flex justify-center">
        <img width={350} src={uploadedImageUrl} className="rounded-xl"></img>
      </div>
      <div className="flex flex-col items-center mt-5">
        <div className="bg-[#F6F8FB] pl-2 pr-[2px] flex items-center justify-between w-full h-[34px] rounded-[8px] border-[1px] border-[#E0E0E0] ">
          <p className="text-[#4F4F4F] font-medium text-xs tracking-[-0.04em]">{displayUrl}</p>
          <button onClick={() => copyToClipboard(uploadedImageUrl)} className="text-xs tracking-[-0.04em] focus:outline-none active:ring-1 text-white cursor-pointer hover:bg-blue-600 bg-blue-500 px-3 rounded-lg h-[30px]">
            {isCopied ? 'Copied' : 'Copy Link'}
          </button>
        </div>
      </div>
    </section>
  )
}