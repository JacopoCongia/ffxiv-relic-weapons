import { useEffect, useState } from "react";
import data from "../data";
import Header from "../components/Header";
import WeaponsHeader from "../components/WeaponsHeader";
import WeaponsContainer from "../components/WeaponsContainer";
import MaterialsContainer from "../components/MaterialsContainer";
import CheckUncheck from "../components/CheckUncheck";
import Navbar from "../components/Navbar";

function Endwalker() {
  const [weapons, setWeapons] = useState(data);
  const [visibility, setVisibility] = useState({
    weapons: true,
    amazingWeapons: true
  });

  const weaponsTruths = weapons.manderville.filter((weapon) =>
    weapon.wpnName === "Manderville Kite Shield" ? null : !weapon.isSelected
  );
  const amazingWeaponsTruths = weapons.amazingManderville.filter((weapon) =>
    weapon.wpnName === "Amazing Manderville Kite Shield"
      ? null
      : !weapon.isSelected
  );

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

  // useEffect(() => {
  //     setWeapons(JSON.parse(localStorage.getItem('weapons')));
  //     setVisibility(JSON.parse(localStorage.getItem('visibility')));
  //

  // }, []);

  // useEffect(() => {
  //   if (weapons !== data ) {
  //     localStorage.setItem('weapons', JSON.stringify(weapons))
  //     localStorage.setItem('visibility', JSON.stringify(visibility))
  //   }

  // }, [weapons, visibility]);

  return (
    <div>
      <Navbar />
      <Header title="Manderville" />
      <WeaponsHeader
        weaponsTruths={weaponsTruths.length}
        handleVisibility={() => handleVisibility("weapons", visibility.weapons)}
        visibility={visibility.weapons}
        totalWeapons={19}
        name="Manderville Weapons"
        patchInfo="iLvl 615 (Patch 6.25)"
      />
      {visibility.weapons && (
        <div className="flex flex-col items-center bg-stone-800 p-10 text-white">
          <WeaponsContainer
            weapons={weapons.manderville}
            type="manderville"
            selectWeapon={selectWeapon}
          />
          <MaterialsContainer
            materials={data.materials}
            type="manderville"
            tomestones={data.tomestones[0]}
            tomestoneAmount={1500}
            weaponsTruths={weaponsTruths}
          />
          <CheckUncheck
            weapons={weapons.manderville}
            type="manderville"
            checkAll={checkAll}
            uncheckAll={uncheckAll}
          />
        </div>
      )}
      <WeaponsHeader
        weaponsTruths={amazingWeaponsTruths.length}
        handleVisibility={() =>
          handleVisibility("amazingWeapons", visibility.amazingWeapons)
        }
        visibility={visibility.amazingWeapons}
        totalWeapons={19}
        name="Amazing Manderville Weapons"
        patchInfo="iLvl 630 (Patch 6.35)"
      />
      {visibility.amazingWeapons && (
        <div className="flex flex-col items-center bg-stone-800 p-10 text-white">
          <WeaponsContainer
            weapons={weapons.amazingManderville}
            type="amazingManderville"
            selectWeapon={selectWeapon}
          />
          <MaterialsContainer
            materials={data.materials}
            type="amazingManderville"
            tomestones={data.tomestones[0]}
            tomestoneAmount={1500}
            weaponsTruths={amazingWeaponsTruths}
          />
          <CheckUncheck
            weapons={weapons.amazingManderville}
            type="amazingManderville"
            checkAll={checkAll}
            uncheckAll={uncheckAll}
          />
        </div>
      )}
    </div>
  );
}

export default Endwalker;
