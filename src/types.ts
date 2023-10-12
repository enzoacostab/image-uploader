import React from 'react'

export interface Context { 
    isLoading: boolean; 
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    isCopied: boolean,
    setIsCopied: React.Dispatch<React.SetStateAction<boolean>>,
    uploadSuccessful: boolean, 
    setUploadSuccessful: React.Dispatch<React.SetStateAction<boolean>>,
    uploadedImageUrl: string, 
    setUploadedImageUrl: React.Dispatch<React.SetStateAction<string>>
}

export type Props = {
    children: string | JSX.Element | JSX.Element[]
  }