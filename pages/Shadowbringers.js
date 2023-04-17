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
    augmentedWeapons: true,
    recollection: true,
    lawsOrder: true
  });

  const weaponsTruths = weapons.resistance.filter((weapon) =>
    weapon.wpnName === "Tenacity" ? null : !weapon.isSelected
  );
  const augmentedWeaponsTruths = weapons.augmentedResistance.filter((weapon) =>
    weapon.wpnName === "Augmented Tenacity" ? null : !weapon.isSelected
  );
  const recollectionWeaponsTruths = weapons.recollection.filter((weapon) =>
    weapon.wpnName === "Tenacity Recollection" ? null : !weapon.isSelected
  );
  const lawsOrderWeaponsTruths = weapons.lawsOrder.filter((weapon) =>
    weapon.wpnName === "Law's Order Kite Shield" ? null : !weapon.isSelected
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

  return (
    <div>
      <Navbar title="Shadowbringers" />
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
      <WeaponsHeader
        weaponsTruths={recollectionWeaponsTruths.length}
        handleVisibility={() =>
          handleVisibility("recollection", visibility.recollection)
        }
        visibility={visibility.recollection}
        totalWeapons={17}
        name="Recollection Weapons"
        patchInfo="iLvl 500 (Patch 5.35)"
      />
      {visibility.recollection && (
        <div className="flex flex-col items-center bg-stone-800 p-10 text-white">
          <WeaponsContainer
            weapons={weapons.recollection}
            type="recollection"
            selectWeapon={selectWeapon}
          />
          <MaterialsContainer
            materials={data.materials}
            type="recollection"
            tomestones={null}
            weaponsTruths={recollectionWeaponsTruths}
          />
          <CheckUncheck
            weapons={weapons.recollection}
            type="recollection"
            checkAll={checkAll}
            uncheckAll={uncheckAll}
          />
        </div>
      )}
      <WeaponsHeader
        weaponsTruths={lawsOrderWeaponsTruths.length}
        handleVisibility={() =>
          handleVisibility("lawsOrder", visibility.lawsOrder)
        }
        visibility={visibility.lawsOrder}
        totalWeapons={17}
        name="Law's Order Weapons"
        patchInfo="iLvl 515 (Patch 5.45)"
      />
      {visibility.lawsOrder && (
        <div className="flex flex-col items-center bg-stone-800 p-10 text-white">
          <WeaponsContainer
            weapons={weapons.lawsOrder}
            type="lawsOrder"
            selectWeapon={selectWeapon}
          />
          <MaterialsContainer
            materials={data.materials}
            type="lawsOrder"
            tomestones={null}
            weaponsTruths={lawsOrderWeaponsTruths}
          />
          <CheckUncheck
            weapons={weapons.lawsOrder}
            type="lawsOrder"
            checkAll={checkAll}
            uncheckAll={uncheckAll}
          />
        </div>
      )}
    </div>
  );
}

export default Shadowbringers;
