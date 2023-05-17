import data from "../data";
import useWeaponsData from "@/hooks/use-weapons-data";
import Header from "../components/Header";
import WeaponsHeader from "../components/WeaponsHeader";
import WeaponsContainer from "../components/WeaponsContainer";
import CheckUncheck from "../components/CheckUncheck";
import MaterialsContainer from "../components/MaterialsContainer";
import Navbar from "../components/Navbar";
import useWeaponsCounter from "@/hooks/use-weapons-counter";

function Shadowbringers() {
  const {
    weapons,
    visibility,
    selectWeapon,
    checkAll,
    uncheckAll,
    handleVisibility
  } = useWeaponsData();

  const resistanceCounter = useWeaponsCounter(weapons.resistance);
  const augmentedResistanceCounter = useWeaponsCounter(
    weapons.augmentedResistance
  );
  const recollectionCounter = useWeaponsCounter(weapons.recollection);
  const lawsOrderCounter = useWeaponsCounter(weapons.lawsOrder);
  const augmentedLawsOrderCounter = useWeaponsCounter(
    weapons.augmentedLawsOrder
  );
  const bladesCounter = useWeaponsCounter(weapons.blades);

  return (
    <div>
      <Navbar title="Shadowbringers" />
      <Header title="Resistance" />
      <WeaponsHeader
        weaponsCounter={resistanceCounter.length}
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
            weaponsCounter={resistanceCounter}
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
        weaponsCounter={augmentedResistanceCounter.length}
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
            weaponsCounter={augmentedResistanceCounter}
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
        weaponsCounter={recollectionCounter.length}
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
            weaponsCounter={recollectionCounter}
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
        weaponsCounter={lawsOrderCounter.length}
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
            weaponsCounter={lawsOrderCounter}
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
        weaponsCounter={augmentedLawsOrderCounter.length}
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
            weaponsCounter={augmentedLawsOrderCounter}
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
        weaponsCounter={bladesCounter.length}
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
            weaponsCounter={bladesCounter}
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
