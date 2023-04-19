import data from "../data";
import useWeaponsData from "@/hooks/use-weapons-data";
import Header from "../components/Header";
import WeaponsHeader from "../components/WeaponsHeader";
import WeaponsContainer from "../components/WeaponsContainer";
import CheckUncheck from "../components/CheckUncheck";
import MaterialsContainer from "../components/MaterialsContainer";
import Navbar from "../components/Navbar";

function Shadowbringers() {
  const {
    weapons,
    visibility,
    selectWeapon,
    checkAll,
    uncheckAll,
    handleVisibility
  } = useWeaponsData();

  const weaponsTruths = weapons.resistance.filter((weapon) =>
    weapon.id === 1 ? null : !weapon.isSelected
  );
  const augmentedWeaponsTruths = weapons.augmentedResistance.filter((weapon) =>
    weapon.id === 1 ? null : !weapon.isSelected
  );
  const recollectionWeaponsTruths = weapons.recollection.filter((weapon) =>
    weapon.id === 1 ? null : !weapon.isSelected
  );
  const lawsOrderWeaponsTruths = weapons.lawsOrder.filter((weapon) =>
    weapon.id === 1 ? null : !weapon.isSelected
  );
  const augmentedLawsOrderWeaponsTruths = weapons.augmentedLawsOrder.filter(
    (weapon) => (weapon.id === 1 ? null : !weapon.isSelected)
  );
  const bladesWeaponsTruths = weapons.blades.filter((weapon) =>
    weapon.id === 1 ? null : !weapon.isSelected
  );

  return (
    <div>
      <Navbar title="Shadowbringers" />
      <Header title="Resistance" />
      <WeaponsHeader
        weaponsTruths={weaponsTruths.length}
        handleVisibility={() =>
          handleVisibility("resistance", visibility.resistance)
        }
        visibility={visibility.resistance}
        totalWeapons={17}
        name="Resistance Weapons"
        patchInfo="iLvl 485 (Patch 5.25)"
      />
      {visibility.resistance && (
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
          handleVisibility(
            "augmentedResistance",
            visibility.augmentedResistance
          )
        }
        visibility={visibility.augmentedResistance}
        totalWeapons={17}
        name="Augmented Resistance Weapons"
        patchInfo="iLvl 500 (Patch 5.35)"
      />
      {visibility.augmentedResistance && (
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
        patchInfo="iLvl 510 (Patch 5.45)"
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
      <WeaponsHeader
        weaponsTruths={augmentedLawsOrderWeaponsTruths.length}
        handleVisibility={() =>
          handleVisibility("augmentedLawsOrder", visibility.augmentedLawsOrder)
        }
        visibility={visibility.augmentedLawsOrder}
        totalWeapons={17}
        name="Augmented Law's Order Weapons"
        patchInfo="iLvl 515 (Patch 5.45)"
      />
      {visibility.augmentedLawsOrder && (
        <div className="flex flex-col items-center bg-stone-800 p-10 text-white">
          <WeaponsContainer
            weapons={weapons.augmentedLawsOrder}
            type="augmentedLawsOrder"
            selectWeapon={selectWeapon}
          />
          <MaterialsContainer
            materials={data.materials}
            type="augmentedLawsOrder"
            tomestones={null}
            weaponsTruths={augmentedLawsOrderWeaponsTruths}
          />
          <CheckUncheck
            weapons={weapons.augmentedLawsOrder}
            type="augmentedLawsOrder"
            checkAll={checkAll}
            uncheckAll={uncheckAll}
          />
        </div>
      )}
      <WeaponsHeader
        weaponsTruths={bladesWeaponsTruths.length}
        handleVisibility={() => handleVisibility("blades", visibility.blades)}
        visibility={visibility.blades}
        totalWeapons={17}
        name="Blade's Weapons"
        patchInfo="iLvl 535 (Patch 5.55)"
      />
      {visibility.blades && (
        <div className="flex flex-col items-center bg-stone-800 p-10 text-white">
          <WeaponsContainer
            weapons={weapons.blades}
            type="blades"
            selectWeapon={selectWeapon}
          />
          <MaterialsContainer
            materials={data.materials}
            type="blades"
            tomestones={null}
            weaponsTruths={bladesWeaponsTruths}
          />
          <CheckUncheck
            weapons={weapons.blades}
            type="blades"
            checkAll={checkAll}
            uncheckAll={uncheckAll}
          />
        </div>
      )}
    </div>
  );
}

export default Shadowbringers;
