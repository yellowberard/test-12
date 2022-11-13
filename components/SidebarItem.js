import Link from "next/link";
import { useRouter } from "next/router";

function SidebarItem({
  route = { name: "", path: "", icon: "", toggle: null },
}) {
  const { pathname } = useRouter();
  return (
    <li
      className={`flex my-1 items-center rounded cursor-pointer text-white ${
        pathname.includes(route.path) && "bg-primary" //hover:bg-primary-hover
        // : "text-gray-400 hover:text-white hover:bg-primary-disabled opacity-100"
      }`}
    >
      <Link href={route.path}>
        <a className="flex justify-between w-96">
          <span className="flex items-center">
            <span
              className={`mr-1 p-3 rounded-tl rounded-bl text-white ${
                pathname.includes(route.path) && "bg-primary-light"
              }`}
            >
              {route.icon}
            </span>
            {route.name}
          </span>
          {route.toggle && <span className="text-white">{route.toggle}</span>}
        </a>
      </Link>
    </li>
  );
}

export default SidebarItem;
