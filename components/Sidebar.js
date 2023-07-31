import { useRouter } from "next/router";
import Link from "next/link";

function Sidebar({ isVisible }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  const activeStyle =
    "underline underline-offset-[5px] decoration-2 hover:opacity-80";
  const inactiveStyle = "hover:opacity-80";

  return (
    <div
      className={`fixed z-10 flex min-h-[100vh] min-w-[250px] translate-x-[-100%] flex-col gap-5 bg-neutral-700 p-7 text-center font-bold text-white duration-[0.5s] min-[1000px]:fixed min-[1000px]:min-w-[250px] min-[1000px]:translate-x-[0] ${
        isVisible && "translate-x-[0]"
      }`}
    >
      <div className="flex flex-col gap-2">
        <Link href="/Endwalker">
          <h1
            className={
              currentRoute === "/Endwalker" ? activeStyle : inactiveStyle
            }
          >
            Endwalker
          </h1>
        </Link>
        <ul className="ml-2 text-[0.8rem]">
          <li>DoM / DoW</li>
          <li>Crafters</li>
          <li>Gatherers</li>
        </ul>
      </div>
      <Link href="/Shadowbringers">
        <h1
          className={
            currentRoute === "/Shadowbringers" ? activeStyle : inactiveStyle
          }
        >
          Shadowbringers
        </h1>
      </Link>
      <Link href="/Stormblood">
        <h1
          className={
            currentRoute === "/Stormblood" ? activeStyle : inactiveStyle
          }
        >
          Stormblood
        </h1>
      </Link>
      <h1 className={inactiveStyle}>Heavensward</h1>
      <h1 className={inactiveStyle}>A Realm Reborn</h1>
    </div>
  );
}

export default Sidebar;
