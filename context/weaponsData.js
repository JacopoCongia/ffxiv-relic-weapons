import { createContext, useState, useEffect } from "react";
import data from "@/data";

const WeaponsDataContext = createContext();

function WeaponsDataProvider({ children }) {
  const [weapons, setWeapons] = useState(data);
  const [visibility, setVisibility] = useState({
    manderville: true,
    amazingManderville: true,
    resistance: true,
    augmentedResistance: true,
    recollection: true,
    lawsOrder: true,
    augmentedLawsOrder: true,
    blades: true
  });

  function selectWeapon(name, key, wpnCategory) {
    setWeapons((oldWeapons) => ({
      ...oldWeapons,
      [key]: wpnCategory.map((weapon) => {
        return weapon.wpnName === name
          ? {
              ...weapon,
              isSelected: !weapon.isSelected
            }
          : weapon;
      })
    }));
  }

  function checkAll(allChecked, type) {
    setWeapons({
      ...weapons,
      [type]: allChecked
    });
  }

  function uncheckAll(allUnchecked, type) {
    setWeapons({
      ...weapons,
      [type]: allUnchecked
    });
  }

  function handleVisibility(key, value) {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [key]: !value
    }));
  }

  useEffect(() => {
    let storedWeapons = JSON.parse(localStorage.getItem("weapons")) || data;
    let storedVisibility =
      JSON.parse(localStorage.getItem("visibility")) || visibility;

    setWeapons(storedWeapons);
    setVisibility(storedVisibility);
  }, []);

  useEffect(() => {
    if (weapons !== data) {
      localStorage.setItem("weapons", JSON.stringify(weapons));
      localStorage.setItem("visibility", JSON.stringify(visibility));
    }
  }, [weapons, visibility]);

  const valuesToShare = {
    weapons,
    setWeapons,
    visibility,
    setVisibility,
    selectWeapon,
    checkAll,
    uncheckAll,
    handleVisibility
  };

  return (
    <WeaponsDataContext.Provider value={valuesToShare}>
      {children}
    </WeaponsDataContext.Provider>
  );
}

export { WeaponsDataProvider };
export default WeaponsDataContext;
