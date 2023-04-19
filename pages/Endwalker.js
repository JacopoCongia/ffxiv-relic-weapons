import data from "../data";
import useWeaponsData from "@/hooks/use-weapons-data";
import Header from "../components/Header";
import WeaponsHeader from "../components/WeaponsHeader";
import WeaponsContainer from "../components/WeaponsContainer";
import CheckUncheck from "../components/CheckUncheck";
import MaterialsContainer from "../components/MaterialsContainer";
import Navbar from "../components/Navbar";

function Endwalker() {
  const {
    weapons,
    visibility,
    selectWeapon,
    checkAll,
    uncheckAll,
    handleVisibility
  } = useWeaponsData();

  const weaponsTruths = weapons.manderville.filter((weapon) =>
    weapon.id === 1 ? null : !weapon.isSelected
  );
  const amazingWeaponsTruths = weapons.amazingManderville.filter((weapon) =>
    weapon.id === 1 ? null : !weapon.isSelected
  );

  return (
    <div>
      <Navbar title="Endwalker" />
      <Header title="Manderville" />
      <WeaponsHeader
        weaponsTruths={weaponsTruths.length}
        handleVisibility={() =>
          handleVisibility("manderville", visibility.manderville)
        }
        visibility={visibility.manderville}
        totalWeapons={19}
        name="Manderville Weapons"
        patchInfo="iLvl 615 (Patch 6.25)"
      />
      {visibility.manderville && (
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
          handleVisibility("amazingManderville", visibility.amazingManderville)
        }
        visibility={visibility.amazingManderville}
        totalWeapons={19}
        name="Amazing Manderville Weapons"
        patchInfo="iLvl 630 (Patch 6.35)"
      />
      {visibility.amazingManderville && (
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
