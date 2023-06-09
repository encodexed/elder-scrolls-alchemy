const EffectsData = [
	{
		id: "100",
		name: "Breach",
		counterEffect: "Increase Spell Resist",
		summary: "Reduces spell resistance",
		hierarchy: "28",
		potionName: "Essence of Ravage Spell Protection",
		poisonName: "Breaching Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Minor Breach</span> to you, reducing your Spell Resistance by 2974 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Minor Breach</span> to your target, reducing Spell Resistance by 2974 for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Breach.png",
	},
	{
		id: "101",
		name: "Cowardice",
		counterEffect: "Increase Spell Power",
		summary: "Reduces weapon and spell damage",
		hierarchy: "21",
		potionName: "Essence of Cowardice",
		poisonName: "Cowardice Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Minor Cowardice</span> to you, reducing your Weapon and Spell Damage by 215 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Minor Cowardice</span> to your target, reducing their Weapon and Spell Damage by 215 for 6.4 seconds.",
		src: "/images/effects/Cowardice.png",
	},
	{
		id: "102",
		name: "Defile",
		counterEffect: "Vitality",
		summary: "Reduces healing taken",
		hierarchy: "23",
		potionName: "Essence of Defile",
		poisonName: "Defiling Poison IX",
		potionEffect:
			"Grants you <span class='text-purple-400'>Minor Defile</span>, reducing your healing taken by 8% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Defile</span>, reducing healing your victim takes by 8% for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Defile.png",
	},
	{
		id: "103",
		name: "Detection",
		counterEffect: "Invisible",
		summary: "Detects invisible units",
		hierarchy: "8",
		potionName: "Essence of Detection",
		poisonName: "Stealth-Draining Poison IX",
		potionEffect:
			"Increase your Stealth Detection by 20 meters for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Exposes your victim, preventing them from stealthing for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Detection.png",
	},
	{
		id: "104",
		name: "Enervation",
		counterEffect: "Weapon Critical",
		summary: "Reduces critical damage",
		hierarchy: "20",
		potionName: "Essence of Ravage Weapon Critical",
		poisonName: "Enervating Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Minor Enervation</span> to you, reducing your critical damage by 12% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Minor Enervation</span> to your victim, reducing all Critical Damage by 12% for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Enervation.png",
	},
	{
		id: "105",
		name: "Entrapment",
		counterEffect: "Unstoppable",
		summary: "Stuns/immobilises the target",
		hierarchy: "29",
		potionName: "Essence of Stun",
		poisonName: "Entrapping Poison IX",
		potionEffect: "<span class='text-purple-400'>Stuns</span> for 15.6 seconds. (45 second cooldown)",
		poisonEffect:
			"<span class='text-purple-400'>Immobilizes</span> your victim for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Entrapment.png",
	},
	{
		id: "106",
		name: "Fracture",
		counterEffect: "Increase Armor",
		summary: "Reduces physical resistance",
		hierarchy: "27",
		potionName: "Essence of Ravage Armor",
		poisonName: "Fracturing Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Minor Fracture</span> to you, reducing your Physical Resistance by 1320 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Minor Fracture</span> to your victim, reducing Physical Resistance by 1320 for 6.4 seconds. (10 second cooldown)",
		src: "/images/effects/Fracture.png",
	},
	{
		id: "107",
		name: "Gradual Ravage Health",
		counterEffect: "Lingering Health",
		summary: "Drains health over a duration",
		hierarchy: "30",
		potionName: "Essence of Creeping Ravage Health",
		poisonName: "Gradual Ravage Health Poison IX",
		potionEffect:
			"Ravage 1011 <span class='text-red-500'>Health</span> per second for 48.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Deals 871 <span class='text-emerald-700'>Poison</span> damage per second for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Gradual_Ravage_Health.png",
	},
	{
		id: "108",
		name: "Heroism",
		counterEffect: "Timidity",
		summary: "Increases ultimate generation, inflicts healing absorption",
		hierarchy: "24",
		potionName: "Essence of Heroism",
		poisonName: "Traumatic Poison IX",
		potionEffect:
			"Grants you <span class='text-amber-500'>Minor Heroism</span> restoring 1 Ultimate every 1.5 seconds for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts 2000 <span class='text-purple-400'>Heal Absorption</span> to your target, negating healing they receive for 5.5 seconds, and grants you <span class='text-amber-500'>Minor Heroism</span>, granting you 1 Ultimate every 1.5 seconds for 7.2 seconds. (10s cooldown)",
		src: "/images/effects/Heroism.png",
	},
	{
		id: "109",
		name: "Hindrance",
		counterEffect: "Speed",
		summary: "Reduces movement speed",
		hierarchy: "7",
		potionName: "Essence of Slow",
		poisonName: "Hindering Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Hindrance</span> to you, reducing Movement Speed by 40% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Hindrance</span> to your target, reducing Movement Speed by 40% for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Hindrance.png",
	},
	{
		id: "110",
		name: "Increase Armor",
		counterEffect: "Fracture",
		summary: "Alters physical resistance",
		hierarchy: "12",
		potionName: "Essence of Armor",
		poisonName: "Resolve-Draining Poison IX",
		potionEffect:
			"Increases your <span class='text-amber-500'>Physical Resistance</span> by 5280 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Reduces your target's Physical Resistance by 1320, and increases your Physical Resistance by 1320 for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Increase_Armor.png",
	},
	{
		id: "111",
		name: "Increase Spell Power",
		counterEffect: "Cowardice",
		summary: "Alters spell power",
		hierarchy: "26",
		potionName: "Essence of Spell Power",
		poisonName: "Sorcery-Draining Poison IX",
		potionEffect:
			"Grants <span class='text-amber-500'>Major Sorcery</span> which increases your Spell Damage by 20% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Cowardice</span> to your target and grants you <span class='text-amber-500'>Minor Sorcery</span>, reducing their Weapon and Spell Damage by 215 and increasing your Spell Power by 10% for 3.5 seconds.",
		src: "/images/effects/Increase_Spell_Power.png",
	},
	{
		id: "112",
		name: "Increase Spell Resist",
		counterEffect: "Breach",
		summary: "Alters spell resistance",
		hierarchy: "13",
		potionName: "Essence of Spell Protection",
		poisonName: "Ward-Draining Poison IX",
		potionEffect:
			"Increases your Spell Resistance by 5280 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Reduces your target's Spell Resistance by 1320, and increases your Spell Resistance by 1320 for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Increase_Spell_Resist.png",
	},
	{
		id: "113",
		name: "Increase Weapon Power",
		counterEffect: "Maim",
		summary: "Alters physical power",
		hierarchy: "25",
		potionName: "Essence of Weapon Power",
		poisonName: "Brutality-Draining Poison IX",
		potionEffect:
			"Grants <span class='text-amber-500'>Major Brutality</span> which increases your Weapon Damage by 20% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Maim</span> to your target and grants you <span class='text-amber-500'>Minor Brutality</span>, reducing their Damage by 5% and increasing your Weapon Damage by 10% for 3.5 seconds. (10 second cooldown)",
		src: "/images/effects/Increase_Weapon_Power.png",
	},
	{
		id: "114",
		name: "Invisible",
		counterEffect: "Detection",
		summary: "Lets you vanish, or marks your victim",
		hierarchy: "9",
		potionName: "Essence of Invisibility",
		poisonName: "Conspicuous Poison IX",
		potionEffect:
			"Vanish for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Marks your victim, permitting you to see them while stealthed for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Invisible.png",
	},
	{
		id: "115",
		name: "Lingering Health",
		counterEffect: "Gradual Ravage Health",
		summary: "Restores health over a duration",
		hierarchy: "10",
		potionName: "Essence of Lingering Health",
		poisonName: "Gradual Health Drain Poison IX",
		potionEffect:
			"Restore 898 <span class='text-red-500'>Health</span> per second for 16.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Deals 871 <span class='text-emerald-700'>Poison</span> damage per second to your target and restores 822 <span class='text-red-500'>Health</span> per second to you for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Lingering_Health.png",
	},
	{
		id: "116",
		name: "Maim",
		counterEffect: "Increase Weapon Power",
		summary: "Reduces damage output",
		hierarchy: "22",
		potionName: "Essence of Ravage Weapon Power",
		poisonName: "Maiming Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Minor Maim</span> to you, reducing all damage you deal by 5% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Minor Maim</span>, reducing your victim's Damage by 5% for 3.5 seconds. (10 second cooldown)",
		src: "/images/effects/Maim.png",
	},
	{
		id: "117",
		name: "Protection",
		counterEffect: "Vulnerability",
		summary: "Reduces damage taken",
		hierarchy: "11",
		potionName: "Essence of Protection",
		poisonName: "Protection-Reversing Poison IX",
		potionEffect:
			"Grants you <span class='text-amber-500'>Minor Protection</span>, reducing your damage taken by 5% for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Vulnerability</span> to your target and grants you <span class='text-amber-500'>Minor Protection</span>, increasing damage your victim takes by 5% and reducing your damage taken by 5% for 2.5 seconds. (10 second cooldown)",
		src: "/images/effects/Protection.png",
	},
	{
		id: "118",
		name: "Ravage Health",
		counterEffect: "Restore Health",
		summary: "Drains health over a duration",
		hierarchy: "1",
		potionName: "Essence of Ravage Health",
		poisonName: "Damage Health Poison IX",
		potionEffect:
			"Ravage 8931 <span class='text-red-500'>Health</span> immediately.<br>Ravage an additional 535 <span class='text-red-500'>Health</span> over 48.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Deals 1342 <span class='text-emerald-700'>Poison</span> damage per second for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Ravage_Health.png",
	},
	{
		id: "119",
		name: "Ravage Magicka",
		counterEffect: "Restore Magicka",
		summary: "Increases magicka costs",
		hierarchy: "3",
		potionName: "Essence of Ravage Magicka",
		poisonName: "Damage Magicka Poison IX",
		potionEffect:
			"Increases the cost of <span class='text-sky-500'>Magicka</span> abilities by 215% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Increases the cost of your victim's <span class='text-sky-500'>Magicka</span> abilities by 10% for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Ravage_Magicka.png",
	},
	{
		id: "120",
		name: "Ravage Stamina",
		counterEffect: "Restore Stamina",
		summary: "Increases stamina costs",
		hierarchy: "4",
		potionName: "Essence of Ravage Stamina",
		poisonName: "Damage Stamina Poison IX",
		potionEffect:
			"Increases the cost of <span class='text-green-500'>Stamina</span> abilities by 215% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Increases the cost of your victim's <span class='text-green-500'>Stamina</span> abilities by 10% for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Ravage_Stamina.png",
	},
	{
		id: "121",
		name: "Restore Health",
		counterEffect: "Ravage Health",
		summary: "Restores/drains health immediately and over time, grants major fortitude",
		hierarchy: "2",
		potionName: "Essence of Health",
		poisonName: "Drain Health Poison IX",
		potionEffect:
			"Restore 8369 <span class='text-red-500'>Health</span> immediately.<br>Grants <span class='text-amber-500'>Major Fortitude</span> which increases your <span class='text-red-500'>Health Recovery</span> by 30% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Drains Health from your target, dealing 1342 <span class='text-emerald-700'>Poison</span> damage to your target and restoring 1266 <span class='text-red-500'>Health</span> to you per second for 2.4 seconds. (10 second cooldown)",
		src: "/images/effects/Restore_Health.png",
	},
	{
		id: "122",
		name: "Restore Magicka",
		counterEffect: "Ravage Magicka",
		summary: "Restores/drains magicka immediately and over time, grants major intellect",
		hierarchy: "18",
		potionName: "Essence of Magicka",
		poisonName: "Drain Magicka Poison IX",
		potionEffect:
			"Restore 7582 <span class='text-sky-500'>Magicka</span> immediately.<br>Grants <span class='text-amber-500'>Major Intellect</span> which increases your <span class='text-sky-500'>Magicka Recovery</span> by 30% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Drains <span class='text-sky-500'>Magicka</span> from your target, increasing the cost of their <span class='text-sky-500'>Magicka</span> abilities by 10%, and restores 238 <span class='text-sky-500'>Magicka</span> to you per second for 3.5 seconds. (10 second cooldown)",
		src: "/images/effects/Restore_Magicka.png",
	},
	{
		id: "123",
		name: "Restore Stamina",
		counterEffect: "Ravage Stamina",
		summary: "Restores/drains stamina immediately and over time, grants major endurance",
		hierarchy: "19",
		potionName: "Essence of Stamina",
		poisonName: "Drain Stamina Poison IX",
		potionEffect:
			"Restore 7582 <span class='text-green-500'>Stamina</span> immediately.<br>Grants <span class='text-amber-500'>Major Endurance</span> which increases your <span class='text-green-500'>Stamina Recovery</span> by 30% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Drains <span class='text-green-500'>Stamina</span> from your target, increasing the cost of their <span class='text-green-500'>Stamina</span> abilities by 10%, and restores 238 <span class='text-green-500'>Stamina</span> to you per second for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Restore_Stamina.png",
	},
	{
		id: "124",
		name: "Speed",
		counterEffect: "Hindrance",
		summary: "Alters movement speed",
		hierarchy: "6",
		potionName: "Essence of Speed",
		poisonName: "Speed-Draining Poison IX",
		potionEffect:
			"Grants <span class='text-amber-500'>Major Expedition</span> which increases your Movement Speed by 30% for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Hindrance</span> to your target and grants you <span class='text-amber-500'>Major Expedition</span>, reducing their Movement Speed by 40% and increasing your Movement Speed by 30% for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Speed.png",
	},
	{
		id: "125",
		name: "Spell Critical",
		counterEffect: "Uncertainty",
		summary: "Alters spell critical",
		hierarchy: "14",
		potionName: "Essence of Spell Critical",
		poisonName: "Prophecy-Draining Poison IX",
		potionEffect:
			"Grants <span class='text-amber-500'>Major Prophecy</span> which gives you 2629 Spell Critical Rating for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Uncertainty</span> to your target and grants you <span class='text-amber-500'>Minor Prophecy</span>, reducing their Weapon and Spell Critical by 1320 and increasing your Spell Critical by 1314 for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Spell_Critical.png",
	},
	{
		id: "126",
		name: "Timidity",
		counterEffect: "Heroism",
		summary: "Removes generated ultimate",
		hierarchy: "32",
		potionName: "Essence of Timidity",
		poisonName: "Timidity Poison IX",
		potionEffect:
			"Grants you <span class='text-purple-400'>Minor Timidity</span>, consuming 1 <span class='text-pink-400'>Ultimate</span> every 1.5 seconds for 47.6 seconds. (45s cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Timidity</span> on your target, consuming 1 <span class='text-pink-400'>Ultimate</span> every 1.5 seconds for 2.3 seconds. (10s cooldown)",
		src: "/images/effects/Timidity.png",
	},
	{
		id: "127",
		name: "Uncertainty",
		counterEffect: "Spell Critical",
		summary: "Reduces critical chance rate",
		hierarchy: "31",
		potionName: "Essence of Ravage Spell Crit",
		poisonName: "Uncertainty Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Minor Uncertainty</span> to you, reducing all critical ratings by 1320 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Minor Uncertainty</span> to your victim, reducing all critical ratings by 1320 for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Uncertainty.png",
	},
	{
		id: "128",
		name: "Unstoppable",
		counterEffect: "Entrapment",
		summary: "Grants crowd control immunity, immobilises",
		hierarchy: "16",
		potionName: "Essence of Immovability",
		poisonName: "Escapist's Poison IX",
		potionEffect:
			"Become immune to knockback and disabling effects for 10.4 seconds. (45 second cooldown)",
		poisonEffect:
			"<span class='text-purple-400'>Immobilizes</span> your target and grants you <span class='text-amber-500'>Unstoppable</span>, rendering you immune to control effects for 3.9 seconds. This poison will also break you free of ongoing control effects. (10 second cooldown)",
		src: "/images/effects/Unstoppable.png",
	},
	{
		id: "129",
		name: "Vitality",
		counterEffect: "Defile",
		summary: "Increases healing taken",
		hierarchy: "5",
		potionName: "Essence of Vitality",
		poisonName: "Vitality-Draining Poison IX",
		potionEffect:
			"Grants you <span class='text-amber-500'>Major Vitality</span>, increasing your healing taken by 16% for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Defile</span> to your target and grants you <span class='text-amber-500'>Minor Vitality</span>, reducing their healing taken by 8% while increasing your healing taken by 8% for 3.9 seconds. (10 second cooldown)",
		src: "/images/effects/Vitality.png",
	},
	{
		id: "130",
		name: "Vulnerability",
		counterEffect: "Protection",
		summary: "Increases damage taken",
		hierarchy: "17",
		potionName: "Essence of Vulnerability",
		poisonName: "Vulnerability Poison IX",
		potionEffect:
			"Grants you <span class='text-purple-400'>Minor Vulnerability</span>, increasing your damage taken by 5% for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Vulnerability</span>, increasing damage your victim takes by 5% for 3.9 seconds. (10 second cooldown)",
		src: "/images/effects/Vulnerability.png",
	},
	{
		id: "131",
		name: "Weapon Critical",
		counterEffect: "Enervation",
		summary: "Alters weapon critical",
		hierarchy: "15",
		potionName: "Essence of Weapon Crit",
		poisonName: "Savagery-Draining Poison IX",
		potionEffect:
			"Grants you <span class='text-amber-500'>Major Savagery</span> which gives you 2629 Weapon Critical Rating for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Enervation</span> to your target and grants you <span class='text-amber-500'>Minor Savagery</span>, reducing their Critical Damage by 10% and increasing your Weapon Critical by 1314 for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Weapon_Critical.png",
	},
];

export default EffectsData;
