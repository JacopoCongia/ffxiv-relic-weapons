import data from "../data";
import useWeaponsData from "@/hooks/use-weapons-data";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import useWeaponsCounter from "@/hooks/use-weapons-counter";
import WeaponsSection from "@/components/WeaponsSection";

function Endwalker() {
  const { weapons, selectWeapon, checkAll, uncheckAll } = useWeaponsData();

  const mandervilleCounter = useWeaponsCounter(weapons.manderville);
  const amazingMandervilleCounter = useWeaponsCounter(
    weapons.amazingManderville
  );
  const majesticMandervilleCounter = useWeaponsCounter(
    weapons.majesticManderville
  );

  return (
    <div>
      <Navbar title="Endwalker" />
      <Header title="Manderville" />
      <WeaponsSection
        weaponsCounter={mandervilleCounter}
        weapons={weapons.manderville}
        totalWeapons={19}
        name="Manderville Weapons"
        patchInfo="iLvl 615 (Patch 6.25)"
        type="manderville"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={data.tomestones.causality}
        tomestoneAmount={1500}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={amazingMandervilleCounter}
        weapons={weapons.amazingManderville}
        totalWeapons={19}
        name="Amazing Manderville Weapons"
        patchInfo="iLvl 630 (Patch 6.35)"
        type="amazingManderville"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={data.tomestones.causality}
        tomestoneAmount={1500}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={majesticMandervilleCounter}
        weapons={weapons.majesticManderville}
        totalWeapons={19}
        name="Majestic Manderville Weapons"
        patchInfo="iLvl 645 (Patch 6.45)"
        type="majesticManderville"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={data.tomestones.causality}
        tomestoneAmount={1500}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
    </div>
  );
}

export default Endwalker;
