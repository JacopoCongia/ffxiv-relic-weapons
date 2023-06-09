import { createContext } from "react";
import WeaponsContainer from "./WeaponsContainer";
import WeaponsHeader from "./WeaponsHeader";
import MaterialsContainer from "./MaterialsContainer";
import CheckUncheck from "./CheckUncheck";
import useToggle from "@/hooks/use-toggle";

const WeaponsSectionContext = createContext();

function WeaponsSection({
  weaponsCounter,
  weapons,
  totalWeapons,
  name,
  patchInfo,
  type,
  selectWeapon,
  materials,
  tomestones,
  tomestoneAmount,
  checkAll,
  uncheckAll,
  notes
}) {
  const [open, setOpen] = useToggle(true);

  return (
    <>
      <WeaponsSectionContext.Provider value={{ open, setOpen }}>
        <WeaponsHeader
          weaponsCounter={weaponsCounter.length}
          weapons={weapons}
          totalWeapons={totalWeapons}
          name={name}
          patchInfo={patchInfo}
        />
      </WeaponsSectionContext.Provider>
      {open && (
        <div className="flex flex-col items-center bg-stone-800 p-10 text-white">
          <WeaponsContainer
            weapons={weapons}
            type={type}
            selectWeapon={selectWeapon}
          />
          <MaterialsContainer
            materials={materials}
            type={type}
            tomestones={tomestones}
            tomestoneAmount={tomestoneAmount}
            weaponsCounter={weaponsCounter}
            notes={notes || null}
          />
          <CheckUncheck
            weapons={weapons}
            type={type}
            checkAll={checkAll}
            uncheckAll={uncheckAll}
          />
        </div>
      )}
    </>
  );
}

export default WeaponsSection;
export { WeaponsSectionContext };
