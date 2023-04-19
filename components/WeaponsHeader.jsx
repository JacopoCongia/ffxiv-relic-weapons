import React from "react";
import { GoChevronDown, GoChevronUp, GoCheck } from "react-icons/go";

function WeaponsHeader({
  visibility,
  handleVisibility,
  totalWeapons,
  weaponsTruths,
  name,
  patchInfo
}) {
  const check =
    totalWeapons - weaponsTruths === totalWeapons ? (
      <GoCheck className="mr-2 text-[20px] text-green-500 sm:text-[28px]" />
    ) : null;

  return (
    <div
      className="mb-[1px] flex cursor-pointer items-center justify-center gap-2 bg-sky-900 p-7 text-[16px] text-white hover:opacity-95 sm:text-[20px]"
      onClick={handleVisibility}
    >
      <p className="flex items-center font-bold ">
        {check} {totalWeapons - weaponsTruths}/{totalWeapons}
      </p>
      <h4 className="ml-auto mr-auto text-center text-[18px] font-bold sm:text-[24px]">
        {name}
        <span className="block text-[14px] text-green-500 sm:text-[18px]">
          {patchInfo}
        </span>
      </h4>
      {!visibility ? (
        <GoChevronDown className="text-2xl sm:text-4xl" />
      ) : (
        <GoChevronUp className="text-2xl sm:text-4xl" />
      )}
    </div>
  );
}

export default WeaponsHeader;
