import useActions from "../hooks/useActions";

export default function ImageUploader() {
  const {handleClick, handleDragOver, handleDrop} = useActions()
  
  return (
  <form>
    <div style={{viewTransitionName:'div'}} className="flex flex-col gap-4 pb-6 items-center">
      <h3 className="m-0 text-[18px] tracking-[-0.04em] font-medium font-poppins text-[#4F4F4F] text-left inline-block">
      Upload your image
      </h3>
      <div className="text-[10px] tracking-[-0.04em] font-medium font-poppins text-[#828282] text-center inline-block">
      File should be Jpeg, Png,...
      </div>
    </div>
    <div onDrop={handleDrop} onDragOver={handleDragOver} className="px-20 py-7 rounded-xl bg-[#F6F8FB] box-border h-[50%] border-[2px] border-dashed border-[#97BEF4] flex flex-col justify-center items-center gap-7">
      <img
          className="overflow-hidden"
          alt=""
          src="/image.svg"
      />
      <p className="text-xs tracking-[-0.04em] font-medium font-poppins text-[#BDBDBD] text-left inline-block">Drag & Drop your image here</p>
    </div>
    <div className="flex flex-col items-center">
      <p className="my-5 text-xs tracking-[-0.04em] font-medium font-poppins text-[#BDBDBD] inline-block">
          Or
      </p>
      <input onChange={handleClick} type="file" accept=".jpg, .jpeg, .png" name="image-file" id="image-file" className="opacity-0 hidden"/>
      <label htmlFor="image-file" className="text-xs px-4 tracking-[-0.04em] text-white cursor-pointer py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
          Choose a file
      </label>
    </div>
  </form>
  )
}