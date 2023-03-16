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
  const [materials, setMaterials] = useState({meteorites: 57, chondrites: 57})
  const [visibility, setVisibility] = useState({weapons: true, amazingWeapons: true});
//   const [visibility, setVisibility] = typeof window !== 'undefined' ? useState(JSON.parse(localStorage.getItem('sectionVisibility'))) : useState({weapons: true, amazingWeapons: true});
  
  const weaponsTruths = weapons.manderville.filter((obj) => obj.wpnName === 'Manderville Kite Shield' ? null : !obj.isSelected);
  const amazingWeaponsTruths = weapons.amazingManderville.filter((obj) => obj.wpnName === 'Amazing Manderville Kite Shield' ? null : !obj.isSelected);
  const totalWeapons = 19;

  function selectWeapon(name) {
    setWeapons(oldWeapons => ({
      manderville: oldWeapons.manderville.map(weapon => {
        return weapon.wpnName === name ?
          {
            ...weapon, 
            isSelected: !weapon.isSelected
          } :
          weapon
        }),
      amazingManderville: oldWeapons.amazingManderville.map(weapon => {
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
    if (type === 'weapons') {
      setWeapons(oldWeapons => (
        {
          manderville: oldWeapons.manderville.map(weapon => (
            {
            ...weapon, 
            isSelected: true
            }
          )),
          amazingManderville: oldWeapons.amazingManderville.map(weapon => (
            {
              ...weapon
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
    if (type === 'weapons') {
      setWeapons(oldWeapons => (
        {
          manderville: oldWeapons.manderville.map(weapon => (
            {
            ...weapon, 
            isSelected: false
            }
          )),
          amazingManderville: oldWeapons.amazingManderville.map(weapon => (
            {
              ...weapon
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
  
  const weaponElements = weapons.manderville.map(item => (
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

  const amazingWeaponElements = weapons.amazingManderville.map(item => (
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
          meteorites: ((weaponsTruths.length) * 3),
          chondrites: ((amazingWeaponsTruths.length) * 3)
        }
      )
    }, [weapons, visibility]);

  return (
    <div>
      <Header 
        title='Manderville'
      />
        <WeaponsHeader 
          weaponsTruths={weaponsTruths.length}
          handleVisibility={() => handleVisibility('weapons', visibility.weapons)}
          visibility={visibility.weapons}
          totalWeapons={totalWeapons}
          name={'Manderville Weapons'}
          patchInfo={'iLvl 615 (Patch 6.25)'}
        />
        { visibility.weapons && 
          <div className='main'>
          <WeaponsContainer 
            weapons={weapons.manderville} 
            selectWeapon={selectWeapon} 
            weaponType='weapon' 
            weaponElements={weaponElements}
          />
          <Materials 
            materials={materials.meteorites} 
            materialName='Manderium Meteorites'
            icon='/icons/endwalker-icons/materials/Manderium_Meteorite_Icon.png'
            tomestone='Allagan Tomestone of Astronomy'
            tomestoneIcon='/icons/Allagan_Tomestone_of_Astronomy_Icon.png'
            tomestoneQuantity={1500}
            materialQuantity={3}
          />
          <CheckUncheck 
            checkAll={() => checkAll('weapons')}
            uncheckAll={() => uncheckAll('weapons')}
          />
          </div>
        }
        <WeaponsHeader 
          weaponsTruths={amazingWeaponsTruths.length}
          handleVisibility={() => handleVisibility('amazingWeapons', visibility.amazingWeapons)}
          visibility={visibility.amazingWeapons}
          totalWeapons={totalWeapons}
          name={'Amazing Manderville Weapons'}
          patchInfo={'iLvl 630 (Patch 6.35)'}
        />
        { visibility.amazingWeapons && 
          <div className='main'>
            <WeaponsContainer 
              weapons={weapons.amazingManderville} 
              selectWeapon={selectWeapon} 
              weaponType='amazingWeapon' 
              weaponElements={amazingWeaponElements}
            />
            <Materials 
              materials={materials.chondrites} 
              materialName='Complementary Chondrites'
              icon='/icons/endwalker-icons/materials/Complementary_Chondrite_Icon.png'
              tomestone='Allagan Tomestone of Astronomy'
              tomestoneIcon='/icons/Allagan_Tomestone_of_Astronomy_Icon.png'
            />
            <CheckUncheck 
              checkAll={() => checkAll('amazingWeapons')}
              uncheckAll={() => uncheckAll('amazingWeapons')}
            />
          </div>
          }
      </div>
  )
}

export default Endwalker;