import { useEffect, useState } from 'react';
import data from '../data';
import Header from '../components/Header';
import Weapon from '../components/Weapon';
import WeaponsHeader from '../components/WeaponsHeader';
import WeaponsContainer from '../components/WeaponsContainer';
import Materials from '../components/Materials';
import CheckUncheck from '../components/CheckUncheck';

function Endwalker() {
  const [weapons, setWeapons] = useState(data);
//   const [weapons, setWeapons] = typeof window !== 'undefined' ? useState(JSON.parse(localStorage.getItem('weapons'))) : useState(data);
  const [materials, setMaterials] = useState(
    {
      thavnairianScalepowder: 68,
      memoriesOfTheDying: 0 
    })
  const [visibility, setVisibility] = useState({resistance: true, augmentedResistance: true});
//   const [visibility, setVisibility] = typeof window !== 'undefined' ? useState(JSON.parse(localStorage.getItem('sectionVisibility'))) : useState({weapons: true, amazingWeapons: true});
  
  const resistanceTruths = weapons.resistance.filter((obj) => obj.wpnName === 'Tenacity' ? null : !obj.isSelected);
  const augmentedResistanceTruths = weapons.augmentedResistance.filter((obj) => obj.wpnName === 'Augmented Tenacity' ? null : !obj.isSelected);
  const totalWeapons = 17;

  function selectWeapon(name) {
    setWeapons(oldWeapons => ({
      ...oldWeapons,
      resistance: oldWeapons.resistance.map(weapon => {
        return weapon.wpnName === name ?
          {
            ...weapon, 
            isSelected: !weapon.isSelected
          } :
          weapon
        })
    }))
    setWeapons(oldWeapons => ({
      ...oldWeapons,
      augmentedResistance: oldWeapons.augmentedResistance.map(weapon => {
        return weapon.wpnName === name ?
          {
            ...weapon, 
            isSelected: !weapon.isSelected
          } :
          weapon
        })
    }))
  };

  function checkAll(type) {
    if (type === 'resistance') {
      setWeapons(oldWeapons => (
        {
          ...oldWeapons,
          resistance: oldWeapons.resistance.map(weapon => (
            {
            ...weapon, 
            isSelected: true
            }
          ))
        }
      ))
    } else if (type === 'augmentedResistance') {
      setWeapons(oldWeapons => (
        {
          ...oldWeapons,
          augmentedResistance: oldWeapons.augmentedResistance.map(weapon => (
            {
              ...weapon,
              isSelected: true
            }))
        }
      ))
      }
    };
  
  function uncheckAll(type) {
    if (type === 'resistance') {
      setWeapons(oldWeapons => (
        {
          resistance: oldWeapons.resistance.map(weapon => (
            {
            ...weapon, 
            isSelected: false
            }
          )),
          augmentedResistance: oldWeapons.augmentedResistance.map(weapon => (
            {
              ...weapon,
            }))
        }
      ))
    } else if (type === 'augmentedResistance') {
      setWeapons(oldWeapons => (
        {
          resistance: oldWeapons.resistance.map(weapon => (
            {
            ...weapon
            }
          )),
          augmentedResistance: oldWeapons.augmentedResistance.map(weapon => (
            {
              ...weapon,
              isSelected: false
            }))
        }
      ))
      }
    };
  
  function handleVisibility(key, value) {
    setVisibility(prevVisibility => ({
        ...prevVisibility,
        [key]: !value
      }))
  };
  
  const resistanceElements = weapons.resistance.map(item => (
    <Weapon 
      key={item.id}
      id={item.id}
      jobName={item.wpnJob}
      weaponName={item.wpnName}
      icon={item.icon}
      isSelected={item.isSelected}
      selectWeapon={() => selectWeapon(item.wpnName)}
    />
  ));
 
  const augmentedResistanceElements = weapons.augmentedResistance.map(item => (
    <Weapon 
      key={item.id}
      id={item.id}
      jobName={item.wpnJob}
      weaponName={item.wpnName}
      icon={item.icon}
      isSelected={item.isSelected}
      selectWeapon={() => selectWeapon(item.wpnName)}
    />
  ));

    useEffect(() => {
      localStorage.setItem('weapons', JSON.stringify(weapons))
      localStorage.setItem('sectionVisibility', JSON.stringify(visibility))

      setMaterials(
        {
          thavnairianScalepowder: ((resistanceTruths.length) * 4),
          memoriesOfTheDying: ((augmentedResistanceTruths.length) * 60)
        }
      )
    }, [weapons, visibility]);

  return (
    <>
    <div>
      <Header 
        title='Resistance'
      />
        <WeaponsHeader 
          weaponsTruths={resistanceTruths.length}
          handleVisibility={() => handleVisibility('resistance', visibility.resistance)}
          visibility={visibility.resistance}
          totalWeapons={totalWeapons}
          name={'Resistance Weapons'}
          patchInfo={'iLvl 485 (Patch 5.25)'}
        />
        { visibility.resistance && 
          <div className='main'>
          <WeaponsContainer 
            weapons={weapons.resistance} 
            selectWeapon={selectWeapon} 
            weaponType='weapon' 
            weaponElements={resistanceElements}
          />
          <Materials 
            materials={materials.thavnairianScalepowder} 
            materialName='Thavnairian Scalepowder'
            icon='/icons/shadowbringers-icons/materials/Thavnairian_Scalepowder_Icon.png'
            tomestone='Allagan Tomestone of Poetics'
            tomestoneIcon='/icons/Allagan_Tomestone_of_Poetics_Icon.png'
            tomestoneQuantity={1000}
            materialQuantity={4}
          />
          <CheckUncheck 
            checkAll={() => checkAll('resistance')}
            uncheckAll={() => uncheckAll('resistance')}
          />
          </div>
        }
      </div>
      <div>
        <WeaponsHeader 
          weaponsTruths={augmentedResistanceTruths.length}
          handleVisibility={() => handleVisibility('augmentedResistance', visibility.augmentedResistance)}
          visibility={visibility.augmentedResistance}
          totalWeapons={totalWeapons}
          name={'Augmented Resistance Weapons'}
          patchInfo={'iLvl 500 (Patch 5.35)'}
        />
        { visibility.augmentedResistance && 
          <div className='main'>
          <WeaponsContainer 
            weapons={weapons.augmentedResistance} 
            selectWeapon={selectWeapon} 
            weaponType='weapon' 
            weaponElements={augmentedResistanceElements}
          />
          <Materials 
            materials={materials.memoriesOfTheDying} 
            materialName='Memories of the Dying'
            icon='/icons/shadowbringers-icons/materials/Harrowing_Memory_of_the_Dying_Icon.png'
            tomestone={null}
            tomestoneIcon={null}
            tomestoneQuantity={null}
            materialQuantity={60}
          />
          <CheckUncheck 
            checkAll={() => checkAll('augmentedResistance')}
            uncheckAll={() => uncheckAll('augmentedResistance')}
          />
          </div>
        }
      </div>
    </>
  )
}

export default Endwalker;