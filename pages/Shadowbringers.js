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
  const [materials, setMaterials] = useState({thavnairianScalepowder: 68})
  const [visibility, setVisibility] = useState({weapons: true});
//   const [visibility, setVisibility] = typeof window !== 'undefined' ? useState(JSON.parse(localStorage.getItem('sectionVisibility'))) : useState({weapons: true, amazingWeapons: true});
  
  const weaponsTruths = weapons.resistance.filter((obj) => obj.wpnName === 'Tenacity' ? null : !obj.isSelected);
  const totalWeapons = 17;

  function selectWeapon(name) {
    setWeapons(oldWeapons => ({
      resistance: oldWeapons.resistance.map(weapon => {
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
          resistance: oldWeapons.resistance.map(weapon => (
            {
            ...weapon, 
            isSelected: true
            }
          ))
        }
      ))
    } else if (type === 'amazingWeapons') {
      setWeapons(oldWeapons => (
        {
          manderville: oldWeapons.manderville.map(weapon => (
            {
            ...weapon
            }
          )),
          amazingManderville: oldWeapons.amazingManderville.map(weapon => (
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
          ))
        }
      ))
    } else if (type === 'amazingWeapons') {
      setWeapons(oldWeapons => (
        {
          manderville: oldWeapons.manderville.map(weapon => (
            {
            ...weapon
            }
          )),
          amazingManderville: oldWeapons.amazingManderville.map(weapon => (
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
  
  const weaponElements = weapons.resistance.map(item => (
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
          thavnairianScalepowder: ((weaponsTruths.length) * 4),
        }
      )
    }, [weapons, visibility]);

  return (
    <div>
      <Header 
        title='Resistance'
      />
        <WeaponsHeader 
          weaponsTruths={weaponsTruths.length}
          handleVisibility={() => handleVisibility('weapons', visibility.weapons)}
          visibility={visibility.weapons}
          totalWeapons={totalWeapons}
          name={'Resistance Weapons'}
          patchInfo={'iLvl 485 (Patch 5.25)'}
        />
        { visibility.weapons && 
          <div className='main'>
          <WeaponsContainer 
            weapons={weapons.resistance} 
            selectWeapon={selectWeapon} 
            weaponType='weapon' 
            weaponElements={weaponElements}
          />
          <Materials 
            materials={materials.thavnairianScalepowder} 
            materialName='Thavnairian Scalepowder'
            icon='/icons/endwalker-icons/materials/Manderium_Meteorite_Icon.png'
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
  )
}

export default Endwalker;