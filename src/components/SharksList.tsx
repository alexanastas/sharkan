import type { IShark } from "../types";
import Shark from "./Shark";

interface Listing {
  data: IShark[];
}
function SharksList({ data }: Listing) {
  return (
    <div className="flex flex-wrap justify-center mt-40 gap-2">
      {data.map((shark) => {
        return <Shark shark={shark} key={shark.name.la} />;
      })}
    </div>
  );
}

export default SharksList;
