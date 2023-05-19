import WeaponsContainer from "./WeaponsContainer";
import WeaponsHeader from "./WeaponsHeader";
import MaterialsContainer from "./MaterialsContainer";
import CheckUncheck from "./CheckUncheck";

function WeaponsSection({
  weaponsCounter,
  weapons,
  handleVisibility,
  visibility,
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
  return (
    <>
      <WeaponsHeader
        weaponsCounter={weaponsCounter.length}
        weapons={weapons}
        handleVisibility={handleVisibility}
        visibility={visibility}
        totalWeapons={totalWeapons}
        name={name}
        patchInfo={patchInfo}
      />
      {visibility && (
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
