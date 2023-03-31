const data = {
    tomestones: [
        {
            id: 0,
            name: 'Allagan Tomestones of Astronomy',
            icon: '/icons/Allagan_Tomestone_of_Astronomy_Icon.png'
        },
        {
            id: 1,
            name: 'Allagan Tomestones of Poetics',
            icon: '/icons/Allagan_Tomestone_of_Poetics_Icon.png'
        }
    ],
    materials: [
        {
            id: 0,
            name: 'Manderium Meteorites',
            icon: '/icons/endwalker-icons/materials/Manderium_Meteorite_Icon.png',
            reqTotal: 57,
            reqPerWeapon: 3,
            type: 'manderville'            
        },
        {
            id: 1,
            name: 'Complementary Chondrites',
            icon: '/icons/endwalker-icons/materials/Complementary_Chondrite_Icon.png',
            reqTotal: 57,
            reqPerWeapon: 3,
            type: 'amazingManderville'
        },
        {
            id: 2,
            name: 'Thavnairian Scalepowder',
            icon: '/icons/shadowbringers-icons/materials/Thavnairian_Scalepowder_Icon.png',
            reqTotal: 68,
            reqPerWeapon: 4,
            type: 'resistance'
        },
        {
            id: 3,
            name: 'Harrowing Memory of the Dying',
            icon: '/icons/shadowbringers-icons/materials/Harrowing_Memory_of_the_Dying_Icon.png',
            reqTotal: 340,
            reqPerWeapon: 20,
            type: 'augmentedResistance'
        },
        {
            id: 4,
            name: 'Sorrowful Memory of the Dying',
            icon: '/icons/shadowbringers-icons/materials/Sorrowful_Memory_of_the_Dying_Icon.png',
            reqTotal: 340,
            reqPerWeapon: 20,
            type: 'augmentedResistance'
        },
        {
            id: 5,
            name: 'Tortured Memory of the Dying',
            icon: '/icons/shadowbringers-icons/materials/Tortured_Memory_of_the_Dying_Icon.png',
            reqTotal: 340,
            reqPerWeapon: 20,
            type: 'augmentedResistance'
        }
    ],
    manderville: [
        {
            id: 0,
            wpnName: "Manderville Sword",
            wpnJob: "Paladin",
            wpnJobShort: "PLD",
            icon: "/icons/endwalker-icons/manderville/Manderville_Sword_Icon.png",
            isSelected: false
        },
        {
            id: 1,
            wpnName: "Manderville Kite Shield",
            wpnJob: "Paladin",
            wpnJobShort: "PLD",
            icon: "/icons/endwalker-icons/manderville/Manderville_Kite_Shield_Icon.png",
            isSelected: false
        },
        {
            id: 2,
            wpnName: "Manderville Axe",
            wpnJob: "Warrior",
            wpnJobShort: "WAR",
            icon: "/icons/endwalker-icons/manderville/Manderville_Axe_Icon.png",
            isSelected: false
        },
        {
            id: 3,
            wpnName: "Manderville Zweihander",
            wpnJob: "Dark Knight",
            wpnJobShort: "DRK",
            icon: "/icons/endwalker-icons/manderville/Manderville_Zweihander_Icon.png",
            isSelected: false
        },
        {
            id: 4,
            wpnName: "Manderville Gunblade",
            wpnJob: "Gunbreaker",
            wpnJobShort: "GNB",
            icon: "/icons/endwalker-icons/manderville/Manderville_Gunblade_Icon.png",
            isSelected: false
        },
        {
            id: 5,
            wpnName: "Manderville Spear",
            wpnJob: "Dragoon",
            wpnJobShort: "DRG",
            icon: "/icons/endwalker-icons/manderville/Manderville_Spear_Icon.png",
            isSelected: false
        },
        {
            id: 6,
            wpnName: "Manderville Scythe",
            wpnJob: "Reaper",
            wpnJobShort: "RPR",
            icon: "/icons/endwalker-icons/manderville/Manderville_Scythe_Icon.png",
            isSelected: false
        },
        {
            id: 7,
            wpnName: "Manderville Knuckles",
            wpnJob: "Monk",
            wpnJobShort: "MNK",
            icon: "/icons/endwalker-icons/manderville/Manderville_Knuckles_Icon.png",
            isSelected: false
        },
        {
            id: 8,
            wpnName: "Manderville Samurai Blade",
            wpnJob: "Samurai",
            wpnJobShort: "SAM",
            icon: "/icons/endwalker-icons/manderville/Manderville_Samurai_Blade_Icon.png",
            isSelected: false
        },
        {
            id: 9,
            wpnName: "Manderville Knives",
            wpnJob: "Ninja",
            wpnJobShort: "NIN",
            icon: "/icons/endwalker-icons/manderville/Manderville_Knives_Icon.png",
            isSelected: false
        },
        {
            id: 10,
            wpnName: "Manderville Harp Bow",
            wpnJob: "Bard",
            wpnJobShort: "BRD",
            icon: "/icons/endwalker-icons/manderville/Manderville_Harp_Bow_Icon.png",
            isSelected: false
        },
        {
            id: 11,
            wpnName: "Manderville Revolver",
            wpnJob: "Machinist",
            wpnJobShort: "MCH",
            icon: "/icons/endwalker-icons/manderville/Manderville_Revolver_Icon.png",
            isSelected: false
        },
        {
            id: 12,
            wpnName: "Manderville Chakrams",
            wpnJob: "Dancer",
            wpnJobShort: "DNC",
            icon: "/icons/endwalker-icons/manderville/Manderville_Chakrams_Icon.png",
            isSelected: false
        },
        {
            id: 13,
            wpnName: "Manderville Rod",
            wpnJob: "Black Mage",
            wpnJobShort: "BLM",
            icon: "/icons/endwalker-icons/manderville/Manderville_Rod_Icon.png",
            isSelected: false
        },
        {
            id: 14,
            wpnName: "Manderville Index",
            wpnJob: "Summoner",
            wpnJobShort: "SMN",
            icon: "/icons/endwalker-icons/manderville/Manderville_Index_Icon.png",
            isSelected: false
        },
        {
            id: 15,
            wpnName: "Manderville Rapier",
            wpnJob: "Red Mage",
            wpnJobShort: "RDM",
            icon: "/icons/endwalker-icons/manderville/Manderville_Rapier_Icon.png",
            isSelected: false
        },
        {
            id: 16,
            wpnName: "Manderville Cane",
            wpnJob: "White Mage",
            wpnJobShort: "WHM",
            icon: "/icons/endwalker-icons/manderville/Manderville_Cane_Icon.png",
            isSelected: false
        },
        {
            id: 17,
            wpnName: "Manderville Codex",
            wpnJob: "Scholar",
            wpnJobShort: "SCH",
            icon: "/icons/endwalker-icons/manderville/Manderville_Codex_Icon.png",
            isSelected: false
        },
        {
            id: 18,
            wpnName: "Manderville Torquetum",
            wpnJob: "Astrologian",
            wpnJobShort: "AST",
            icon: "/icons/endwalker-icons/manderville/Manderville_Torquetum_Icon.png",
            isSelected: false
        },
        {
            id: 19,
            wpnName: "Manderville Milpreves",
            wpnJob: "Sage",
            wpnJobShort: "SGE",
            icon: "/icons/endwalker-icons/manderville/Manderville_Milpreves_Icon.png",
            isSelected: false
        }
    ],
    amazingManderville: [
        {
            id: 0,
            wpnName: "Amazing Manderville Sword",
            wpnJob: "Paladin",
            wpnJobShort: "PLD",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Sword_Icon.png",
            isSelected: false
        },
        {
            id: 1,
            wpnName: "Amazing Manderville Kite Shield",
            wpnJob: "Paladin",
            wpnJobShort: "PLD",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Kite_Shield_Icon.png",
            isSelected: false
        },
        {
            id: 2,
            wpnName: "Amazing Manderville Axe",
            wpnJob: "Warrior",
            wpnJobShort: "WAR",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Axe_Icon.png",
            isSelected: false
        },
        {
            id: 3,
            wpnName: "Amazing Manderville Zweihander",
            wpnJob: "Dark Knight",
            wpnJobShort: "DRK",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Zweihander_Icon.png",
            isSelected: false
        },
        {
            id: 4,
            wpnName: "Amazing Manderville Gunblade",
            wpnJob: "Gunbreaker",
            wpnJobShort: "GNB",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Gunblade_Icon.png",
            isSelected: false
        },
        {
            id: 5,
            wpnName: "Amazing Manderville Spear",
            wpnJob: "Dragoon",
            wpnJobShort: "DRG",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Spear_Icon.png",
            isSelected: false
        },
        {
            id: 6,
            wpnName: "Amazing Manderville Scythe",
            wpnJob: "Reaper",
            wpnJobShort: "RPR",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Scythe_Icon.png",
            isSelected: false
        },
        {
            id: 7,
            wpnName: "Amazing Manderville Knuckles",
            wpnJob: "Monk",
            wpnJobShort: "MNK",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Knuckles_Icon.png",
            isSelected: false
        },
        {
            id: 8,
            wpnName: "Amazing Manderville Samurai Blade",
            wpnJob: "Samurai",
            wpnJobShort: "SAM",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Samurai_Blade_Icon.png",
            isSelected: false
        },
        {
            id: 9,
            wpnName: "Amazing Manderville Knives",
            wpnJob: "Ninja",
            wpnJobShort: "NIN",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Knives_Icon.png",
            isSelected: false
        },
        {
            id: 10,
            wpnName: "Amazing Manderville Harp Bow",
            wpnJob: "Bard",
            wpnJobShort: "BRD",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Harp_Bow_Icon.png",
            isSelected: false
        },
        {
            id: 11,
            wpnName: "Amazing Manderville Revolver",
            wpnJob: "Machinist",
            wpnJobShort: "MCH",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Revolver_Icon.png",
            isSelected: false
        },
        {
            id: 12,
            wpnName: "Amazing Manderville Chakrams",
            wpnJob: "Dancer",
            wpnJobShort: "DNC",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Chakrams_Icon.png",
            isSelected: false
        },
        {
            id: 13,
            wpnName: "Amazing Manderville Rod",
            wpnJob: "Black Mage",
            wpnJobShort: "BLM",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Rod_Icon.png",
            isSelected: false
        },
        {
            id: 14,
            wpnName: "Amazing Manderville Index",
            wpnJob: "Summoner",
            wpnJobShort: "SMN",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Index_Icon.png",
            isSelected: false
        },
        {
            id: 15,
            wpnName: "Amazing Manderville Rapier",
            wpnJob: "Red Mage",
            wpnJobShort: "RDM",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Rapier_Icon.png",
            isSelected: false
        },
        {
            id: 16,
            wpnName: "Amazing Manderville Cane",
            wpnJob: "White Mage",
            wpnJobShort: "WHM",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Cane_Icon.png",
            isSelected: false
        },
        {
            id: 17,
            wpnName: "Amazing Manderville Codex",
            wpnJob: "Scholar",
            wpnJobShort: "SCH",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Codex_Icon.png",
            isSelected: false
        },
        {
            id: 18,
            wpnName: "Amazing Manderville Torquetum",
            wpnJob: "Astrologian",
            wpnJobShort: "AST",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Torquetum_Icon.png",
            isSelected: false
        },
        {
            id: 19,
            wpnName: "Amazing Manderville Milpreves",
            wpnJob: "Sage",
            wpnJobShort: "SGE",
            icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Milpreves_Icon.png",
            isSelected: false
        },
    ],
    resistance: [
        {
            id: 0,
            wpnName: "Honorbound",
            wpnJob: "Paladin",
            wpnJobShort: "PLD",
            icon: "/icons/shadowbringers-icons/resistance/Honorbound_Icon.png",
            isSelected: false
        },
        {
            id: 1,
            wpnName: "Tenacity",
            wpnJob: "Paladin",
            wpnJobShort: "PLD",
            icon: "/icons/shadowbringers-icons/resistance/Tenacity_Icon.png",
            isSelected: false
        },
        {
            id: 2,
            wpnName: "Skullrender",
            wpnJob: "Warrior",
            wpnJobShort: "WAR",
            icon: "/icons/shadowbringers-icons/resistance/Skullrender_Icon.png",
            isSelected: false
        },
        {
            id: 3,
            wpnName: "Woeborn",
            wpnJob: "Dark Knight",
            wpnJobShort: "DRK",
            icon: "/icons/shadowbringers-icons/resistance/Woeborn_Icon.png",
            isSelected: false
        },
        {
            id: 4,
            wpnName: "Crownsblade",
            wpnJob: "Gunbreaker",
            wpnJobShort: "GNB",
            icon: "/icons/shadowbringers-icons/resistance/Crownsblade_Icon.png",
            isSelected: false
        },
        {
            id: 5,
            wpnName: "Dreizack",
            wpnJob: "Dragoon",
            wpnJobShort: "DRG",
            icon: "/icons/shadowbringers-icons/resistance/Dreizack_Icon.png",
            isSelected: false
        },
        {
            id: 6,
            wpnName: "Samsara",
            wpnJob: "Monk",
            wpnJobShort: "MNK",
            icon: "/icons/shadowbringers-icons/resistance/Samsara_Icon.png",
            isSelected: false
        },
        {
            id: 7,
            wpnName: "Hoshikiri",
            wpnJob: "Samurai",
            wpnJobShort: "SAM",
            icon: "/icons/shadowbringers-icons/resistance/Hoshikiri_Icon.png",
            isSelected: false
        },
        {
            id: 8,
            wpnName: "Honeshirazu",
            wpnJob: "Ninja",
            wpnJobShort: "NIN",
            icon: "/icons/shadowbringers-icons/resistance/Honeshirazu_Icon.png",
            isSelected: false
        },
        {
            id: 9,
            wpnName: "Brilliance",
            wpnJob: "Bard",
            wpnJobShort: "BRD",
            icon: "/icons/shadowbringers-icons/resistance/Brilliance_Icon.png",
            isSelected: false
        },
        {
            id: 10,
            wpnName: "Lawman",
            wpnJob: "Machinist",
            wpnJobShort: "MCH",
            icon: "/icons/shadowbringers-icons/resistance/Lawman_Icon.png",
            isSelected: false
        },
        {
            id: 11,
            wpnName: "Enchufla",
            wpnJob: "Dancer",
            wpnJobShort: "DNC",
            icon: "/icons/shadowbringers-icons/resistance/Enchufla_Icon.png",
            isSelected: false
        },
        {
            id: 12,
            wpnName: "Soulscourge",
            wpnJob: "Black Mage",
            wpnJobShort: "BLM",
            icon: "/icons/shadowbringers-icons/resistance/Soulscourge_Icon.png",
            isSelected: false
        },
        {
            id: 13,
            wpnName: "Espiritus",
            wpnJob: "Summoner",
            wpnJobShort: "SMN",
            icon: "/icons/shadowbringers-icons/resistance/Espiritus_Icon.png",
            isSelected: false
        },
        {
            id: 14,
            wpnName: "Talekeeper",
            wpnJob: "Red Mage",
            wpnJobShort: "RDM",
            icon: "/icons/shadowbringers-icons/resistance/Talekeeper_Icon.png",
            isSelected: false
        },
        {
            id: 15,
            wpnName: "Ingrimm",
            wpnJob: "White Mage",
            wpnJobShort: "WHM",
            icon: "/icons/shadowbringers-icons/resistance/Ingrimm_Icon.png",
            isSelected: false
        },
        {
            id: 16,
            wpnName: "Akademos",
            wpnJob: "Scholar",
            wpnJobShort: "SCH",
            icon: "/icons/shadowbringers-icons/resistance/Akademos_Icon.png",
            isSelected: false
        },
        {
            id: 17,
            wpnName: "Solstice",
            wpnJob: "Astrologian",
            wpnJobShort: "AST",
            icon: "/icons/shadowbringers-icons/resistance/Solstice_Icon.png",
            isSelected: false
        },
    ],
    augmentedResistance: [
        {
            id: 0,
            wpnName: "Augmented Honorbound",
            wpnJob: "Paladin",
            wpnJobShort: "PLD",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Honorbound_Icon.png",
            isSelected: false
        },
        {
            id: 1,
            wpnName: "Augmented Tenacity",
            wpnJob: "Paladin",
            wpnJobShort: "PLD",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Tenacity_Icon.png",
            isSelected: false
        },
        {
            id: 2,
            wpnName: "Augmented Skullrender",
            wpnJob: "Warrior",
            wpnJobShort: "WAR",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Skullrender_Icon.png",
            isSelected: false
        },
        {
            id: 3,
            wpnName: "Augmented Woeborn",
            wpnJob: "Dark Knight",
            wpnJobShort: "DRK",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Woeborn_Icon.png",
            isSelected: false
        },
        {
            id: 4,
            wpnName: "Augmented Crownsblade",
            wpnJob: "Gunbreaker",
            wpnJobShort: "GNB",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Crownsblade_Icon.png",
            isSelected: false
        },
        {
            id: 5,
            wpnName: "Augmented Dreizack",
            wpnJob: "Dragoon",
            wpnJobShort: "DRG",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Dreizack_Icon.png",
            isSelected: false
        },
        {
            id: 6,
            wpnName: "Augmented Samsara",
            wpnJob: "Monk",
            wpnJobShort: "MNK",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Samsara_Icon.png",
            isSelected: false
        },
        {
            id: 7,
            wpnName: "Augmented Hoshikiri",
            wpnJob: "Samurai",
            wpnJobShort: "SAM",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Hoshikiri_Icon.png",
            isSelected: false
        },
        {
            id: 8,
            wpnName: "Augmented Honeshirazu",
            wpnJob: "Ninja",
            wpnJobShort: "NIN",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Honeshirazu_Icon.png",
            isSelected: false
        },
        {
            id: 9,
            wpnName: "Augmented Brilliance",
            wpnJob: "Bard",
            wpnJobShort: "BRD",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Brilliance_Icon.png",
            isSelected: false
        },
        {
            id: 10,
            wpnName: "Augmented Lawman",
            wpnJob: "Machinist",
            wpnJobShort: "MCH",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Lawman_Icon.png",
            isSelected: false
        },
        {
            id: 11,
            wpnName: "Augmented Enchufla",
            wpnJob: "Dancer",
            wpnJobShort: "DNC",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Enchufla_Icon.png",
            isSelected: false
        },
        {
            id: 12,
            wpnName: "Augmented Soulscourge",
            wpnJob: "Black Mage",
            wpnJobShort: "BLM",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Soulscourge_Icon.png",
            isSelected: false
        },
        {
            id: 13,
            wpnName: "Augmented Espiritus",
            wpnJob: "Summoner",
            wpnJobShort: "SMN",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Espiritus_Icon.png",
            isSelected: false
        },
        {
            id: 14,
            wpnName: "Augmented Talekeeper",
            wpnJob: "Red Mage",
            wpnJobShort: "RDM",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Talekeeper_Icon.png",
            isSelected: false
        },
        {
            id: 15,
            wpnName: "Augmented Ingrimm",
            wpnJob: "White Mage",
            wpnJobShort: "WHM",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Ingrimm_Icon.png",
            isSelected: false
        },
        {
            id: 16,
            wpnName: "Augmented Akademos",
            wpnJob: "Scholar",
            wpnJobShort: "SCH",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Akademos_Icon.png",
            isSelected: false
        },
        {
            id: 17,
            wpnName: "Augmented Solstice",
            wpnJob: "Astrologian",
            wpnJobShort: "AST",
            icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Solstice_Icon.png",
            isSelected: false
        },
    ]

}

export default data;

// const data = {
//     manderville: [
//         {
//             id: 0,
//             wpnName: "Manderville Sword",
//             wpnJob: "Paladin",
//             wpnJobShort: "PLD",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Sword_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 1,
//             wpnName: "Manderville Kite Shield",
//             wpnJob: "Paladin",
//             wpnJobShort: "PLD",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Kite_Shield_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 2,
//             wpnName: "Manderville Axe",
//             wpnJob: "Warrior",
//             wpnJobShort: "WAR",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Axe_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 3,
//             wpnName: "Manderville Zweihander",
//             wpnJob: "Dark Knight",
//             wpnJobShort: "DRK",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Zweihander_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 4,
//             wpnName: "Manderville Gunblade",
//             wpnJob: "Gunbreaker",
//             wpnJobShort: "GNB",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Gunblade_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 5,
//             wpnName: "Manderville Spear",
//             wpnJob: "Dragoon",
//             wpnJobShort: "DRG",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Spear_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 6,
//             wpnName: "Manderville Scythe",
//             wpnJob: "Reaper",
//             wpnJobShort: "RPR",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Scythe_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 7,
//             wpnName: "Manderville Knuckles",
//             wpnJob: "Monk",
//             wpnJobShort: "MNK",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Knuckles_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 8,
//             wpnName: "Manderville Samurai Blade",
//             wpnJob: "Samurai",
//             wpnJobShort: "SAM",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Samurai_Blade_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 9,
//             wpnName: "Manderville Knives",
//             wpnJob: "Ninja",
//             wpnJobShort: "NIN",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Knives_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 10,
//             wpnName: "Manderville Harp Bow",
//             wpnJob: "Bard",
//             wpnJobShort: "BRD",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Harp_Bow_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 11,
//             wpnName: "Manderville Revolver",
//             wpnJob: "Machinist",
//             wpnJobShort: "MCH",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Revolver_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 12,
//             wpnName: "Manderville Chakrams",
//             wpnJob: "Dancer",
//             wpnJobShort: "DNC",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Chakrams_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 13,
//             wpnName: "Manderville Rod",
//             wpnJob: "Black Mage",
//             wpnJobShort: "BLM",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Rod_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 14,
//             wpnName: "Manderville Index",
//             wpnJob: "Summoner",
//             wpnJobShort: "SMN",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Index_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 15,
//             wpnName: "Manderville Rapier",
//             wpnJob: "Red Mage",
//             wpnJobShort: "RDM",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Rapier_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 16,
//             wpnName: "Manderville Cane",
//             wpnJob: "White Mage",
//             wpnJobShort: "WHM",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Cane_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 17,
//             wpnName: "Manderville Codex",
//             wpnJob: "Scholar",
//             wpnJobShort: "SCH",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Codex_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 18,
//             wpnName: "Manderville Torquetum",
//             wpnJob: "Astrologian",
//             wpnJobShort: "AST",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Torquetum_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 19,
//             wpnName: "Manderville Milpreves",
//             wpnJob: "Sage",
//             wpnJobShort: "SGE",
//             icon: "/icons/endwalker-icons/manderville/Manderville_Milpreves_Icon.png",
//             isSelected: false
//         }
//     ],
//     amazingManderville: [
//         {
//             id: 0,
//             wpnName: "Amazing Manderville Sword",
//             wpnJob: "Paladin",
//             wpnJobShort: "PLD",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Sword_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 1,
//             wpnName: "Amazing Manderville Kite Shield",
//             wpnJob: "Paladin",
//             wpnJobShort: "PLD",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Kite_Shield_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 2,
//             wpnName: "Amazing Manderville Axe",
//             wpnJob: "Warrior",
//             wpnJobShort: "WAR",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Axe_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 3,
//             wpnName: "Amazing Manderville Zweihander",
//             wpnJob: "Dark Knight",
//             wpnJobShort: "DRK",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Zweihander_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 4,
//             wpnName: "Amazing Manderville Gunblade",
//             wpnJob: "Gunbreaker",
//             wpnJobShort: "GNB",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Gunblade_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 5,
//             wpnName: "Amazing Manderville Spear",
//             wpnJob: "Dragoon",
//             wpnJobShort: "DRG",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Spear_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 6,
//             wpnName: "Amazing Manderville Scythe",
//             wpnJob: "Reaper",
//             wpnJobShort: "RPR",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Scythe_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 7,
//             wpnName: "Amazing Manderville Knuckles",
//             wpnJob: "Monk",
//             wpnJobShort: "MNK",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Knuckles_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 8,
//             wpnName: "Amazing Manderville Samurai Blade",
//             wpnJob: "Samurai",
//             wpnJobShort: "SAM",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Samurai_Blade_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 9,
//             wpnName: "Amazing Manderville Knives",
//             wpnJob: "Ninja",
//             wpnJobShort: "NIN",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Knives_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 10,
//             wpnName: "Amazing Manderville Harp Bow",
//             wpnJob: "Bard",
//             wpnJobShort: "BRD",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Harp_Bow_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 11,
//             wpnName: "Amazing Manderville Revolver",
//             wpnJob: "Machinist",
//             wpnJobShort: "MCH",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Revolver_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 12,
//             wpnName: "Amazing Manderville Chakrams",
//             wpnJob: "Dancer",
//             wpnJobShort: "DNC",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Chakrams_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 13,
//             wpnName: "Amazing Manderville Rod",
//             wpnJob: "Black Mage",
//             wpnJobShort: "BLM",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Rod_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 14,
//             wpnName: "Amazing Manderville Index",
//             wpnJob: "Summoner",
//             wpnJobShort: "SMN",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Index_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 15,
//             wpnName: "Amazing Manderville Rapier",
//             wpnJob: "Red Mage",
//             wpnJobShort: "RDM",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Rapier_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 16,
//             wpnName: "Amazing Manderville Cane",
//             wpnJob: "White Mage",
//             wpnJobShort: "WHM",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Cane_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 17,
//             wpnName: "Amazing Manderville Codex",
//             wpnJob: "Scholar",
//             wpnJobShort: "SCH",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Codex_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 18,
//             wpnName: "Amazing Manderville Torquetum",
//             wpnJob: "Astrologian",
//             wpnJobShort: "AST",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Torquetum_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 19,
//             wpnName: "Amazing Manderville Milpreves",
//             wpnJob: "Sage",
//             wpnJobShort: "SGE",
//             icon: "/icons/endwalker-icons/amazing-manderville/Amazing_Manderville_Milpreves_Icon.png",
//             isSelected: false
//         },
//     ],
//     resistance: [
//         {
//             id: 0,
//             wpnName: "Honorbound",
//             wpnJob: "Paladin",
//             wpnJobShort: "PLD",
//             icon: "/icons/shadowbringers-icons/resistance/Honorbound_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 1,
//             wpnName: "Tenacity",
//             wpnJob: "Paladin",
//             wpnJobShort: "PLD",
//             icon: "/icons/shadowbringers-icons/resistance/Tenacity_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 2,
//             wpnName: "Skullrender",
//             wpnJob: "Warrior",
//             wpnJobShort: "WAR",
//             icon: "/icons/shadowbringers-icons/resistance/Skullrender_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 3,
//             wpnName: "Woeborn",
//             wpnJob: "Dark Knight",
//             wpnJobShort: "DRK",
//             icon: "/icons/shadowbringers-icons/resistance/Woeborn_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 4,
//             wpnName: "Crownsblade",
//             wpnJob: "Gunbreaker",
//             wpnJobShort: "GNB",
//             icon: "/icons/shadowbringers-icons/resistance/Crownsblade_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 5,
//             wpnName: "Dreizack",
//             wpnJob: "Dragoon",
//             wpnJobShort: "DRG",
//             icon: "/icons/shadowbringers-icons/resistance/Dreizack_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 6,
//             wpnName: "Samsara",
//             wpnJob: "Monk",
//             wpnJobShort: "MNK",
//             icon: "/icons/shadowbringers-icons/resistance/Samsara_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 7,
//             wpnName: "Hoshikiri",
//             wpnJob: "Samurai",
//             wpnJobShort: "SAM",
//             icon: "/icons/shadowbringers-icons/resistance/Hoshikiri_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 8,
//             wpnName: "Honeshirazu",
//             wpnJob: "Ninja",
//             wpnJobShort: "NIN",
//             icon: "/icons/shadowbringers-icons/resistance/Honeshirazu_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 9,
//             wpnName: "Brilliance",
//             wpnJob: "Bard",
//             wpnJobShort: "BRD",
//             icon: "/icons/shadowbringers-icons/resistance/Brilliance_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 10,
//             wpnName: "Lawman",
//             wpnJob: "Machinist",
//             wpnJobShort: "MCH",
//             icon: "/icons/shadowbringers-icons/resistance/Lawman_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 11,
//             wpnName: "Enchufla",
//             wpnJob: "Dancer",
//             wpnJobShort: "DNC",
//             icon: "/icons/shadowbringers-icons/resistance/Enchufla_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 12,
//             wpnName: "Soulscourge",
//             wpnJob: "Black Mage",
//             wpnJobShort: "BLM",
//             icon: "/icons/shadowbringers-icons/resistance/Soulscourge_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 13,
//             wpnName: "Espiritus",
//             wpnJob: "Summoner",
//             wpnJobShort: "SMN",
//             icon: "/icons/shadowbringers-icons/resistance/Espiritus_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 14,
//             wpnName: "Talekeeper",
//             wpnJob: "Red Mage",
//             wpnJobShort: "RDM",
//             icon: "/icons/shadowbringers-icons/resistance/Talekeeper_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 15,
//             wpnName: "Ingrimm",
//             wpnJob: "White Mage",
//             wpnJobShort: "WHM",
//             icon: "/icons/shadowbringers-icons/resistance/Ingrimm_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 16,
//             wpnName: "Akademos",
//             wpnJob: "Scholar",
//             wpnJobShort: "SCH",
//             icon: "/icons/shadowbringers-icons/resistance/Akademos_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 17,
//             wpnName: "Solstice",
//             wpnJob: "Astrologian",
//             wpnJobShort: "AST",
//             icon: "/icons/shadowbringers-icons/resistance/Solstice_Icon.png",
//             isSelected: false
//         },
//     ],
//     augmentedResistance: [
//         {
//             id: 0,
//             wpnName: "Augmented Honorbound",
//             wpnJob: "Paladin",
//             wpnJobShort: "PLD",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Honorbound_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 1,
//             wpnName: "Augmented Tenacity",
//             wpnJob: "Paladin",
//             wpnJobShort: "PLD",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Tenacity_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 2,
//             wpnName: "Augmented Skullrender",
//             wpnJob: "Warrior",
//             wpnJobShort: "WAR",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Skullrender_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 3,
//             wpnName: "Augmented Woeborn",
//             wpnJob: "Dark Knight",
//             wpnJobShort: "DRK",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Woeborn_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 4,
//             wpnName: "Augmented Crownsblade",
//             wpnJob: "Gunbreaker",
//             wpnJobShort: "GNB",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Crownsblade_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 5,
//             wpnName: "Augmented Dreizack",
//             wpnJob: "Dragoon",
//             wpnJobShort: "DRG",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Dreizack_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 6,
//             wpnName: "Augmented Samsara",
//             wpnJob: "Monk",
//             wpnJobShort: "MNK",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Samsara_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 7,
//             wpnName: "Augmented Hoshikiri",
//             wpnJob: "Samurai",
//             wpnJobShort: "SAM",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Hoshikiri_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 8,
//             wpnName: "Augmented Honeshirazu",
//             wpnJob: "Ninja",
//             wpnJobShort: "NIN",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Honeshirazu_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 9,
//             wpnName: "Augmented Brilliance",
//             wpnJob: "Bard",
//             wpnJobShort: "BRD",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Brilliance_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 10,
//             wpnName: "Augmented Lawman",
//             wpnJob: "Machinist",
//             wpnJobShort: "MCH",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Lawman_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 11,
//             wpnName: "Augmented Enchufla",
//             wpnJob: "Dancer",
//             wpnJobShort: "DNC",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Enchufla_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 12,
//             wpnName: "Augmented Soulscourge",
//             wpnJob: "Black Mage",
//             wpnJobShort: "BLM",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Soulscourge_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 13,
//             wpnName: "Augmented Espiritus",
//             wpnJob: "Summoner",
//             wpnJobShort: "SMN",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Espiritus_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 14,
//             wpnName: "Augmented Talekeeper",
//             wpnJob: "Red Mage",
//             wpnJobShort: "RDM",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Talekeeper_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 15,
//             wpnName: "Augmented Ingrimm",
//             wpnJob: "White Mage",
//             wpnJobShort: "WHM",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Ingrimm_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 16,
//             wpnName: "Augmented Akademos",
//             wpnJob: "Scholar",
//             wpnJobShort: "SCH",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Akademos_Icon.png",
//             isSelected: false
//         },
//         {
//             id: 17,
//             wpnName: "Augmented Solstice",
//             wpnJob: "Astrologian",
//             wpnJobShort: "AST",
//             icon: "/icons/shadowbringers-icons/augmented-resistance/Augmented_Solstice_Icon.png",
//             isSelected: false
//         },
//     ]

// }

// export default data;