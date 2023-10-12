import { DragEvent, ChangeEvent } from "react";
import { supabase } from "../supabaseClient";
import { useImage } from "./useImage";
import { Context } from "../types";
import { toast } from "sonner";

const useActions = () =>{
  const {
    setIsLoading, 
    setUploadedImageUrl, 
    setUploadSuccessful,
    setIsCopied} = useImage() as Context

  const handleDrop= async (event: DragEvent<HTMLDivElement>) =>{
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    uploadFile(file)
  }

  const handleDragOver= (event: DragEvent<HTMLDivElement>) =>{
    event.preventDefault()
  }

  const handleClick= async(event: ChangeEvent<HTMLInputElement>) =>{
    if (event.target.files){
      const file = event.target.files[0]
      uploadFile(file)
    }
  }
  const uploadFile = async(file: File) => {
    setIsLoading(true);

    try {
      const filePath = `uploads/${file.name}`;
      await supabase.storage.from("bucket-1").upload(filePath, file);
      const urlData = supabase.storage.from("bucket-1").getPublicUrl(filePath);
      setUploadedImageUrl(urlData.data.publicUrl);
    } 
    catch (error) {
      if (error) {
        toast.error("Error uploading image:", error);
      }
    } 
    finally {
      setIsLoading(false);
      setUploadSuccessful(true);
    }
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
    } catch (err) {
      err instanceof Error && toast.error(err.toString());
    }
  };

  const truncateUrl = (url: string, length = 40) => {
    if (url.length <= length) return url;
    return url.substring(0, length) + "...";
  };

  return {handleDrop, handleDragOver, handleClick, truncateUrl, copyToClipboard}
}

export default useActions