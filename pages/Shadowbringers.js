import data from "../data";
import useWeaponsData from "@/hooks/use-weapons-data";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import useWeaponsCounter from "@/hooks/use-weapons-counter";
import WeaponsSection from "@/components/WeaponsSection";

function Shadowbringers() {
  const { weapons, selectWeapon, checkAll, uncheckAll } = useWeaponsData();

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
      <WeaponsSection
        weaponsCounter={resistanceCounter}
        weapons={weapons.resistance}
        totalWeapons={17}
        name="Resistance Weapons"
        patchInfo="iLvl 485 (Patch 5.25)"
        type="resistance"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={data.tomestones[1]}
        tomestoneAmount={1000}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={augmentedResistanceCounter}
        weapons={weapons.augmentedResistance}
        totalWeapons={17}
        name="Augmented Resistance Weapons"
        patchInfo="iLvl 500 (Patch 5.35)"
        type="augmentedResistance"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={recollectionCounter}
        weapons={weapons.recollection}
        totalWeapons={17}
        name="Recollection Weapons"
        patchInfo="iLvl 500 (Patch 5.35)"
        type="recollection"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={lawsOrderCounter}
        weapons={weapons.lawsOrder}
        totalWeapons={17}
        name="Law's Order Weapons"
        patchInfo="iLvl 510 (Patch 5.45)"
        type="lawsOrder"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={augmentedLawsOrderCounter}
        weapons={weapons.augmentedLawsOrder}
        totalWeapons={17}
        name="Augmented Law's Order Weapons"
        patchInfo="iLvl 515 (Patch 5.45)"
        type="augmentedLawsOrder"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={bladesCounter}
        weapons={weapons.augmentedLawsOrder}
        totalWeapons={17}
        name="Blade's Weapons"
        patchInfo="iLvl 535 (Patch 5.55)"
        type="blades"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
    </div>
  );
}

export default Shadowbringers;
