import React from "react";

function Header({ title }) {
  return (
    <header className="flex justify-center bg-emerald-600 p-10 text-3xl text-[22px] font-bold text-white sm:text-[30px] lg:text-[36px]">
      <h1>{title} Weapons Checklist</h1>
    </header>
  );
}

export default Header;
