import { createContext, useState } from "react";
import { Context, Props } from "./types";

export const ImageContext = createContext<Context | null>(null);

const ImageProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccessful, setUploadSuccessful] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  return (
    <ImageContext.Provider
      value={{
        isLoading, 
        setIsLoading,
        uploadSuccessful,
        setUploadSuccessful,
        uploadedImageUrl,
        setUploadedImageUrl,
        isCopied,
        setIsCopied,
      }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider

