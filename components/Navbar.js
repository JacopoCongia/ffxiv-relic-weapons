import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoThreeBars } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";

function Navbar({ title }) {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;
  const activeStyle = "border-b-2 hover:opacity-80";
  const inactiveStyle = "hover:opacity-80";

  return (
    <div className="sticky top-0 z-50 select-none font-bold tracking-wider text-white">
      <div className="hidden justify-evenly gap-5 bg-white/30 py-2 drop-shadow-xl backdrop-blur min-[1080px]:flex">
        <Link href="/Endwalker">
          <h1
            className={
              currentRoute === "/Endwalker" ? activeStyle : inactiveStyle
            }
          >
            Endwalker
          </h1>
        </Link>
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
      <div className="flex items-center gap-4 bg-white/30 px-4 py-2 drop-shadow-xl backdrop-blur min-[1080px]:hidden">
        <Link href="/">
          <AiFillHome className="cursor-pointer text-[22px] hover:opacity-90" />
        </Link>
        <h1 className="mr-auto">{title}</h1>
        <GoThreeBars
          onClick={() => setVisible(!visible)}
          className="cursor-pointer text-[22px] hover:opacity-90"
        />
      </div>
      {visible && (
        <div className="absolute flex h-[100vh] w-[100%] flex-col items-center gap-5 bg-black/40 p-4 backdrop-blur">
          <Link href="/Endwalker">
            <h1
              className={
                currentRoute === "/Endwalker" ? activeStyle : inactiveStyle
              }
            >
              Endwalker
            </h1>
          </Link>
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
      )}
    </div>
  );
}

export default Navbar;
