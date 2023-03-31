import React from "react";

function CheckUncheck({ checkAll, uncheckAll, weapons, type }) {
  const allChecked = weapons.map((weapon) => ({
    ...weapon,
    isSelected: true
  }));

  const allUnchecked = weapons.map((weapon) => ({
    ...weapon,
    isSelected: false
  }));

  return (
    <div className="flex flex-col gap-6 py-5 sm:flex-row">
      <button
        className="h-[40px] w-[200px] rounded-[6px] bg-green-700 hover:opacity-80"
        onClick={() => checkAll(allChecked, type)}
      >
        Check All
      </button>
      <button
        className="h-[40px] w-[200px] rounded-[6px] bg-red-900 hover:opacity-80"
        onClick={() => uncheckAll(allUnchecked, type)}
      >
        Uncheck All
      </button>
    </div>
  );
}

export default CheckUncheck;
