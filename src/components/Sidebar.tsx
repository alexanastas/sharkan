// components
import Overlay from "./Overlay";

interface SidebarProps {
  isOpen: boolean;
  results?: number;
  closer: () => void;
}

function Sidebar({ isOpen, results,closer }: SidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      <Overlay onExit={closer} />

      {/* sidebar content and searcher */}

      <div className="w-80 md:w-[300px] h-screen fixed left-0 top-0 bg-gray-900 z-999">
        <div className="w-full p-5 max-w-sm min-w-[200px] flex flex-column justify-center items-center">
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-400 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Αναζήτηση καρχαριών"
              />
              <p className="flex items-start mt-2 text-xs text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-1.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
               Βρέθηκαν {results ?? 0} αποτελέσματα
              </p>
            </div>
          </div>

          {/* footer credits */}
          <footer className="absolute bottom-4">
            <p>Copyright &copy; 2025</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
