import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

export const Header = () => {
  return (
    <div className="border-b-2 border-b-lime-500 py-6">
      <div className="container mx-auto flex justify-between items-center ">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-lime-500"
        >
          Lagman.KG
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};
