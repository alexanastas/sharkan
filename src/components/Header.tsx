import RoundBtn from "./RoundBtn";
import { RefreshIcon, FilterIcon, Shark } from "../Icons";

interface HeaderProps {
  results: number;
  refresh: () => void;
  sidebar: () => void;
}

function Header({ results, refresh, sidebar }: HeaderProps) {
  return (
    <div className="w-full h-35 bg-gray-700 fixed top-0 flex justify-center items-center z-999">
      <div className="flex flex-col gap-2 text-center justify-center items-center">
        <div className="text-lg font-bold">
          <Shark />
        </div>

        <div className="font-2lg text-white font-bold">
          Βρέθηκαν <span>{results}</span> Καρχαρίες
        </div>
      </div>
      {/* right rounded buttons */}
      <div className="absolute right-5 flex flex-row gap-2">
        <RoundBtn callback={sidebar}>
          <FilterIcon />
        </RoundBtn>

        <RoundBtn callback={refresh}>
          <RefreshIcon />
        </RoundBtn>
      </div>
    </div>
  );
}

export default Header;
