import React from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function WeaponsHeader(props) {
  return (
    <div
      className="mb-[1px] flex cursor-pointer items-center justify-center gap-2 bg-sky-900 p-7 text-[16px] text-white hover:opacity-95 sm:text-[20px]"
      onClick={props.handleVisibility}
    >
      <p className="font-bold">
        {props.totalWeapons - props.weaponsTruths}/{props.totalWeapons}
      </p>
      <h4 className="ml-auto mr-auto text-center text-[18px] font-bold sm:text-[24px]">
        {props.name}
        <span className="block text-[14px] text-green-500 sm:text-[18px]">
          {props.patchInfo}
        </span>
      </h4>
      {!props.visibility ? (
        <GoChevronDown className="text-2xl sm:text-4xl" />
      ) : (
        <GoChevronUp className="text-2xl sm:text-4xl" />
      )}
    </div>
  );
}

export default WeaponsHeader;
