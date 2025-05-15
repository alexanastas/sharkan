import type { IShark } from "../types";

//components
import Badge from "./Badge";

import { ShieldIcon, DangerIcon } from "../Icons";

import image from "../assets/shark.png";

type SharkProps = {
  shark: IShark;
};

function Shark({ shark }: SharkProps) {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="relative h-80 m-2.5 overflow-hidden text-white rounded-md">
        <img src={image} alt="card-image" />
      </div>

      {/* warning badges */}
      <div className="w-full absolute top-6 left-5 flex flex-row gap-2">
        <Badge bg="green-600" color="white" title="Προστατευόμενο Είδος" shown={shark.endangered}>
          <ShieldIcon />
        </Badge>

         <Badge bg="orange-600" color="white" title="Επιθετικό Είδος" shown={shark.aggressive}>
          <DangerIcon />
        </Badge>
      </div>

      <div className="p-4 text-center">
        <h6 className="mb-2 text-slate-800 text-md font-bold">
          {shark.name.gr}
        </h6>

        <h3 className="mb-2 text-slate-800 text-sm font-semibold">
          Επιστημονική Ονομασία: {shark.name.la}
        </h3>

        {/* information labels */}
        <div className="w-full mt-6 grid grid-cols-2 gap-2 h-6 text-xs">
          <div className="w-auto bg-gray-700 text-white px-2 py-1 rounded-sm">
            Οικογέννεια: {shark.family.gr}
          </div>

          <div className="w-auto bg-indigo-700 text-white px-2 py-1 rounded-sm">
            Μέγιστο βάθος {shark.maxdeepth} μέτρα
          </div>

          <div className="w-auto bg-green-700 text-white px-2 py-1 rounded-sm">
            Ελάχιστο Μήκος {shark.min_size_m} μέτρα
          </div>

          <div className="w-auto bg-orange-500 text-white px-2 py-1 rounded-sm">
            Μέγιστο Μήκος {shark.max_size_m} μέτρα
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-4"></div>
    </div>
  );
}

export default Shark;
