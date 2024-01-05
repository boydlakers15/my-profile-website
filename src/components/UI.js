import { atom, useAtom } from "jotai";
import './UI.css';
export const currentPageAtom = atom("intro");

export const UI = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      duration-500
      ${currentPage === "home" ? "" : "opacity-0"}`}
      >
        <div className="h-[66%]"></div>
        <button
            onClick={() => setCurrentPage("store")}
            className=" custom-button"
            >
            ENTER
        </button>

      </section>
    </div>
  );
};