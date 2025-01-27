import { Button } from "@/components/ui/button";
import { GoLocation } from "react-icons/go";

const Select = () => {
  return (
    <Button className="flex items-center gap-3 " variant={"nav"}>
      <GoLocation />
      <span>Aspire Sathon ratchapreuk</span>
    </Button>
  );
};
export default Select;
