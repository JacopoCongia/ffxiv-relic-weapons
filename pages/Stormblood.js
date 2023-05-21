import data from "../data";
import useWeaponsData from "@/hooks/use-weapons-data";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import useWeaponsCounter from "@/hooks/use-weapons-counter";
import WeaponsSection from "@/components/WeaponsSection";

function Stormblood() {
  const {
    weapons,
    visibility,
    selectWeapon,
    checkAll,
    uncheckAll,
    handleVisibility
  } = useWeaponsData();

  const antiquatedCounter = useWeaponsCounter(weapons.antiquated);
  const anemosCounter = useWeaponsCounter(weapons.anemos);
  const elementalCounter = useWeaponsCounter(weapons.elemental);
  const pyrosCounter = useWeaponsCounter(weapons.pyros);
  const eurekaCounter = useWeaponsCounter(weapons.eureka);

  return (
    <div>
      <Navbar title="Stormblood" />
      <Header title="Eurekan" />
      <WeaponsSection
        weaponsCounter={antiquatedCounter}
        weapons={weapons.antiquated}
        handleVisibility={() =>
          handleVisibility("antiquated", visibility.antiquated)
        }
        visibility={visibility.antiquated}
        totalWeapons={15}
        name="Antiquated Weapons"
        patchInfo="iLvl 290 (Patch 4.0)"
        type="antiquated"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={anemosCounter}
        weapons={weapons.anemos}
        handleVisibility={() => handleVisibility("anemos", visibility.anemos)}
        visibility={visibility.anemos}
        totalWeapons={15}
        name="Anemos Weapons"
        patchInfo="iLvl 355 (Patch 4.25)"
        type="anemos"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={elementalCounter}
        weapons={weapons.elemental}
        handleVisibility={() =>
          handleVisibility("elemental", visibility.elemental)
        }
        visibility={visibility.elemental}
        totalWeapons={15}
        name="Elemental Weapons"
        patchInfo="iLvl 370 (Patch 4.36)"
        type="elemental"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={pyrosCounter}
        weapons={weapons.pyros}
        handleVisibility={() => handleVisibility("pyros", visibility.pyros)}
        visibility={visibility.pyros}
        totalWeapons={15}
        name="Pyros Weapons"
        patchInfo="iLvl 385 (Patch 4.45)"
        type="pyros"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={null}
        tomestoneAmount={null}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        notes="you will also need to craft 30 different Logos Actions (10 for the first step, 20 for the second step) to get the weapons."
      />
      <WeaponsSection
        weaponsCounter={eurekaCounter}
        weapons={weapons.eureka}
        handleVisibility={() => handleVisibility("eureka", visibility.eureka)}
        visibility={visibility.eureka}
        totalWeapons={15}
        name="Eureka Weapons"
        patchInfo="iLvl 405 (Patch 4.55)"
        type="eureka"
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

export default Stormblood;
