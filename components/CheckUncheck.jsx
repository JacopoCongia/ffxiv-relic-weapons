import React from "react";
import Button from "./Button";

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
      <Button
        onClick={() => checkAll(allChecked, type)}
        check
      >
        Check All
      </Button>
      <Button
        onClick={() => uncheckAll(allUnchecked, type)}
        uncheck
      >
        Uncheck All
      </Button>
    </div>
  );
}

export default CheckUncheck;
