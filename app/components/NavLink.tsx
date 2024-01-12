import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: NavLinkProps) => {
  const currentRoute = usePathname();
  return (
    <Link href={href} className={currentRoute === href ? "underline" : ""}>
      {title}
    </Link>
  );
};

export default NavLink;
