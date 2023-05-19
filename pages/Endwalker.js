import data from "../data";
import useWeaponsData from "@/hooks/use-weapons-data";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import useWeaponsCounter from "@/hooks/use-weapons-counter";
import WeaponsSection from "@/components/WeaponsSection";

function Endwalker() {
  const {
    weapons,
    visibility,
    selectWeapon,
    checkAll,
    uncheckAll,
    handleVisibility
  } = useWeaponsData();

  const mandervilleCounter = useWeaponsCounter(weapons.manderville);
  const amazingMandervilleCounter = useWeaponsCounter(
    weapons.amazingManderville
  );

  return (
    <div>
      <Navbar title="Endwalker" />
      <Header title="Manderville" />
      <WeaponsSection
        weaponsCounter={mandervilleCounter}
        weapons={weapons.manderville}
        handleVisibility={() =>
          handleVisibility("manderville", visibility.manderville)
        }
        visibility={visibility.manderville}
        totalWeapons={19}
        name="Manderville Weapons"
        patchInfo="iLvl 615 (Patch 6.25)"
        type="manderville"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={data.tomestones[0]}
        tomestoneAmount={1500}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
      <WeaponsSection
        weaponsCounter={amazingMandervilleCounter}
        weapons={weapons.amazingManderville}
        handleVisibility={() =>
          handleVisibility("amazingManderville", visibility.amazingManderville)
        }
        visibility={visibility.amazingManderville}
        totalWeapons={19}
        name="Amazing Manderville Weapons"
        patchInfo="iLvl 630 (Patch 6.35)"
        type="amazingManderville"
        selectWeapon={selectWeapon}
        materials={data.materials}
        tomestones={data.tomestones[0]}
        tomestoneAmount={1500}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
      />
    </div>
  );
}

export default Endwalker;
