import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex justify-evenly gap-5 bg-white/30 p-2 font-bold tracking-wider text-white drop-shadow-xl backdrop-blur">
      <Link href="/Endwalker">
        <h1 className="hover:opacity-80">Endwalker</h1>
      </Link>
      <Link href="/Shadowbringers">
        <h1 className="hover:opacity-80">Shadowbringers</h1>
      </Link>
      <h1 className="hover:opacity-80">Stormblood</h1>
      <h1 className="hover:opacity-80">Heavensward</h1>
      <h1 className="hover:opacity-80">A Realm Reborn</h1>
    </div>
  );
}

export default Navbar;
