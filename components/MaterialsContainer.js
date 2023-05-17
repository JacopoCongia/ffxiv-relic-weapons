import React from "react";
import Materials from "./Materials";

function MaterialsContainer({
  tomestoneType,
  tomestoneAmount,
  materials,
  type,
  weaponsCounter
}) {
  const updatedMaterials = materials.filter(
    (material) => material.type === type
  );

  return (
    <div className="flex flex-col items-start gap-2 pt-6 text-[18px]">
      {tomestoneType !== null && (
        <p className="flex items-center gap-3">
          <img
            className="w-5"
            alt={tomestoneType.name}
            src={tomestoneType.icon}
          />
          {tomestoneType.name}: {weaponsCounter.length * tomestoneAmount}
        </p>
      )}
      <Materials
        materials={updatedMaterials}
        weaponsCounter={weaponsCounter}
      />
    </div>
  );
}

export default MaterialsContainer;
