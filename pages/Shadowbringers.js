import { useEffect, useState } from "react";
import data from "../data";
import Header from "../components/Header";
import WeaponsHeader from "../components/WeaponsHeader";
import WeaponsContainer from "../components/WeaponsContainer";
import CheckUncheck from "../components/CheckUncheck";
import MaterialsContainer from "../components/MaterialsContainer";
import Navbar from "../components/Navbar";

function Shadowbringers() {
  const [weapons, setWeapons] = useState(data);
  const [visibility, setVisibility] = useState({
    weapons: true,
    augmentedWeapons: true
  });

  const weaponsTruths = weapons.resistance.filter((weapon) =>
    weapon.wpnName === "Tenacity" ? null : !weapon.isSelected
  );
  const augmentedWeaponsTruths = weapons.augmentedResistance.filter((weapon) =>
    weapon.wpnName === "Augmented Tenacity" ? null : !weapon.isSelected
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
  //   setWeapons(JSON.parse(localStorage.getItem('weapons')));
  //   setVisibility(JSON.parse(localStorage.getItem('visibility')));

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
      <Header title="Resistance" />
      <WeaponsHeader
        weaponsTruths={weaponsTruths.length}
        handleVisibility={() => handleVisibility("weapons", visibility.weapons)}
        visibility={visibility.weapons}
        totalWeapons={17}
        name="Resistance Weapons"
        patchInfo="iLvl 485 (Patch 5.25)"
      />
      {visibility.weapons && (
        <div className="flex flex-col items-center bg-stone-800 p-10 text-white">
          <WeaponsContainer
            weapons={weapons.resistance}
            type="resistance"
            selectWeapon={selectWeapon}
          />
          <MaterialsContainer
            materials={data.materials}
            type="resistance"
            tomestones={data.tomestones[1]}
            tomestoneAmount={1000}
            weaponsTruths={weaponsTruths}
          />
          <CheckUncheck
            weapons={weapons.resistance}
            type="resistance"
            checkAll={checkAll}
            uncheckAll={uncheckAll}
          />
        </div>
      )}
      <WeaponsHeader
        weaponsTruths={augmentedWeaponsTruths.length}
        handleVisibility={() =>
          handleVisibility("augmentedWeapons", visibility.augmentedWeapons)
        }
        visibility={visibility.augmentedWeapons}
        totalWeapons={17}
        name="Augmented Resistance Weapons"
        patchInfo="iLvl 500 (Patch 5.35)"
      />
      {visibility.augmentedWeapons && (
        <div className="flex flex-col items-center bg-stone-800 p-10 text-white">
          <WeaponsContainer
            weapons={weapons.augmentedResistance}
            type="augmentedResistance"
            selectWeapon={selectWeapon}
          />
          <MaterialsContainer
            materials={data.materials}
            type="augmentedResistance"
            tomestones={null}
            weaponsTruths={augmentedWeaponsTruths}
          />
          <CheckUncheck
            weapons={weapons.augmentedResistance}
            type="augmentedResistance"
            checkAll={checkAll}
            uncheckAll={uncheckAll}
          />
        </div>
      )}
    </div>
  );
}

export default Shadowbringers;
