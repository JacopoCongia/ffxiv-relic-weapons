import React from "react";
import Materials from "./Materials";

function MaterialsContainer({
  tomestones,
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
      {tomestones !== null && (
        <p className="flex items-center gap-3">
          <img
            className="w-5"
            alt={tomestones.name}
            src={tomestones.icon}
          />
          {tomestones.name}: {weaponsCounter.length * tomestoneAmount}
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