import { type ReactElement } from "react";

interface BtnProps {
    children: ReactElement;
    callback: () => void;
}
function RoundBtn({children,callback} : BtnProps) {
  return (
    <div
      className="w-8 h-8 bg-white flex justify-center items-center cursor-pointer rounded-md"
      onClick={callback}>
     
     {children}
    </div>
  );
}

export default RoundBtn;
