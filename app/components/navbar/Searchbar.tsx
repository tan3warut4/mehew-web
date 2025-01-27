import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className="relative flex flex-1 items-center">
      <IoSearch className="absolute left-2 text-slate-400 focus-within:text-slate-600" />
      <input
        className="bg-slate-300 rounded-full flex-1 
    focus:outline-none caret-slate-700 
    py-2 px-4 pl-8 text-slate-700 tracking-wider text-sm"
        type="text"
        placeholder="Search our menus"
      />
    </div>
  );
};
export default Searchbar;
