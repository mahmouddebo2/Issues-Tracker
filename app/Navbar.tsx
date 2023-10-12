import { link } from "fs";
import Link from "next/link";
import { BsBugFill } from "react-icons/bs";
const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b-2 mb-5 px-5 h-14 items-center">
      <Link href="/">
        <BsBugFill />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}
          >
            {link?.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
