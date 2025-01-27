import Link from "next/link";
import Searchbar from "./Searchbar";
import Select from "./Select";
import { GiHamburgerMenu } from "react-icons/gi";
import OrderOptionToggle from "./OrderOptionToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex fixed w-full z-50 gap-4 py-3 px-7 items-center flex-nowrap">
      <Button variant={"nav"}>
        <GiHamburgerMenu />
      </Button>

      <Link href={"/"} className="tracking-wider text-xl">
        {" "}
        <span className="font-extrabold">Me</span>Hew
      </Link>
      <OrderOptionToggle />
      <Select />
      <Searchbar />
      <button className="rounded-full hover:bg-slate-100 p-2">Sign in</button>
      <button>Sign up</button>
    </nav>
  );
};
export default Navbar;
