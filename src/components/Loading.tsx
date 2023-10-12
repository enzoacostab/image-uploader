export default function Loading() {

  return(
    <div style={{viewTransitionName:'div'}} className="flex w-full flex-col gap-4">
      <p className="text-left">Uploading...</p>
      <div className="h-1 w-80 overflow-hidden bg-[#F2F2F2] rounded-[8px]">
        <div className="relative w-[100px] left-[-100px] h-full bg-[#2F80ED] rounded-[8px] animate-loading"></div>
      </div>
    </div>
  )
}