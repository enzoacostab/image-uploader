import { useImage } from "../hooks/useImage";
import ImageUploader from "./ImageUploader";
import { Context } from "../types";
import Loading from "./Loading";
import UploadSuccessful from "./UploadSuccessful";
import { Toaster } from "sonner";
import { motion } from "framer-motion";

const Main = (): JSX.Element => {
  const {isLoading, uploadSuccessful} = useImage() as Context

  return (
    <div className="bg-slate-50 flex justify-center flex-col items-center rounded-lg bg-gray w-full h-full text-center text-[14px] text-darkgray font-montserrat">
      <Toaster visibleToasts={1}/>
      <motion.div key={`${isLoading}`} animate={{opacity:1}} className="opacity-0 rounded-xl flex px-7 bg-[#FFFFFF] justify-center shadow-[0px_4px_12px_rgba(0,_0,_0,_0.1)] w-fit py-10" >
        {isLoading ?
        <Loading/> : uploadSuccessful ?
        <UploadSuccessful/> :
        <ImageUploader/> }
      </motion.div>
    </div>
  );
};

export default Main