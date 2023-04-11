//

const EffectsData = [
	{
		id: "100",
		name: "Breach",
		counterEffect: "Increase Spell Resist",
		summary: "Reduces spell resistance",
		potionEffect:
			"Applies Minor Breach to you, reducing your Spell Resistance by 2974 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies Minor Breach to your target, reducing Spell Resistance by 2974 for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Breach.png",
	},
	{
		id: "101",
		name: "Cowardice",
		counterEffect: "Increase Spell Power",
		summary: "Reduces weapon and spell damage",
		potionEffect:
			"Applies Minor Cowardice to you, reducing your Weapon and Spell Damage by 215 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies Minor Cowardice to your target, reducing their Weapon and Spell Damage by 215 for 6.4 seconds.",
		src: "/images/effects/Cowardice.png",
	},
	{
		id: "102",
		name: "Defile",
		counterEffect: "Vitality",
		summary: "Reduces healing taken",
		potionEffect:
			"Grants you Minor Defile, reducing your healing taken by 8% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts Minor Defile, reducing healing your victim takes by 8% for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Defile.png",
	},
	{
		id: "103",
		name: "Detection",
		counterEffect: "Invisible",
		summary: "Detects invisible units",
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
		potionEffect:
			"Applies Minor Enervation to you, reducing your critical damage by 12% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies Minor Enervation to your victim, reducing all Critical Damage by 12% for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Enervation.png",
	},
	{
		id: "105",
		name: "Entrapment",
		counterEffect: "Unstoppable",
		summary: "Stuns/immobilises the target",
		potionEffect: "Stuns for 15.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Immobilizes your victim for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Entrapment.png",
	},
	{
		id: "106",
		name: "Fracture",
		counterEffect: "Increase Armor",
		summary: "Reduces physical resistance",
		potionEffect:
			"Applies Minor Fracture to you, reducing your Physical Resistance by 1320 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies Minor Fracture to your victim, reducing Physical Resistance by 1320 for 6.4 seconds. (10 second cooldown)",
		src: "/images/effects/Fracture.png",
	},
	{
		id: "107",
		name: "Gradual Ravage Health",
		counterEffect: "Lingering Health",
		summary: "Drains health over a duration",
		potionEffect:
			"Ravage 1011 Health per second for 48.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Deals 871 Poison Damage per second for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Gradual_Ravage_Health.png",
	},
	{
		id: "108",
		name: "Heroism",
		counterEffect: "Timidity",
		summary: "Increases ultimate generation, inflicts healing absorption",
		potionEffect:
			"Grants you Minor Heroism restoring 1 Ultimate every 1.5 seconds for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts 2000 Heal Absorption to your target, negating healing they receive for 5.5 seconds, and grants you Minor Heroism, granting you 1 Ultimate every 1.5 seconds for 7.2 seconds. (10s cooldown)",
		src: "/images/effects/Heroism.png",
	},
	{
		id: "109",
		name: "Hindrance",
		counterEffect: "Speed",
		summary: "Reduces movement speed",
		potionEffect:
			"Applies Hindrance to you, reducing Movement Speed by 40% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies Hindrance to your target, reducing Movement Speed by 40% for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Hindrance.png",
	},
	{
		id: "110",
		name: "Increase Armor",
		counterEffect: "Fracture",
		summary: "Alters physical resistance",
		potionEffect:
			"Increases your Physical Resistance by 5280 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Reduces your target's Physical Resistance by 1320, and increases your Physical Resistance by 1320 for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Increase_Armor.png",
	},
	{
		id: "111",
		name: "Increase Spell Power",
		counterEffect: "Cowardice",
		summary: "Alters spell power",
		potionEffect:
			"Grants Major Sorcery which increases your Spell Damage by 20% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts Minor Cowardice to your target and grants you Minor Sorcery, reducing their Weapon and Spell Damage by 215 and increasing your Spell Power by 10% for 3.5 seconds.",
		src: "/images/effects/Increase_Spell_Power.png",
	},
	{
		id: "112",
		name: "Increase Spell Resist",
		counterEffect: "Breach",
		summary: "Alters spell resistance",
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
		potionEffect:
			"Grants Major Brutality which increases your Weapon Damage by 20% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts Minor Maim to your target and grants you Minor Brutality, reducing their Damage by 5% and increasing your Weapon Damage by 10% for 3.5 seconds. (10 second cooldown)",
		src: "/images/effects/Increase_Weapon_Power.png",
	},
	{
		id: "114",
		name: "Invisible",
		counterEffect: "Detection",
		summary: "Lets you vanish, or marks your victim",
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
		potionEffect:
			"Restore 898 Health per second for 16.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Deals 871 Poison Damage per second to your target and restores 822 Health per second to you for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Lingering_Health.png",
	},
	{
		id: "116",
		name: "Maim",
		counterEffect: "Increase Weapon Power",
		summary: "Reduces damage",
		potionEffect:
			"Applies Minor Maim to you, reducing all damage you deal by 5% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies Minor Maim, reducing your victim's Damage by 5% for 3.5 seconds. (10 second cooldown)",
		src: "/images/effects/Maim.png",
	},
	{
		id: "117",
		name: "Protection",
		counterEffect: "Vulnerability",
		summary: "Reduces damage taken",
		potionEffect:
			"Grants you Minor Protection, reducing your damage taken by 5% for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts Minor Vulnerability to your target and grants you Minor Protection, increasing damage your victim takes by 5% and reducing your damage taken by 5% for 2.5 seconds. (10 second cooldown)",
		src: "/images/effects/Protection.png",
	},
	{
		id: "118",
		name: "Ravage Health",
		counterEffect: "Restore Health",
		summary: "Drains health over a duration",
		potionEffect:
			"Ravage 8931 Health immediately. Ravage an additional 535 Health over 48.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Deals 1342 Poison Damage per second for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Ravage_Health.png",
	},
	{
		id: "119",
		name: "Ravage Magicka",
		counterEffect: "Restore Magicka",
		summary: "Increases magicka costs",
		potionEffect:
			"Increases the cost of Magicka abilities by 215% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Increases the cost of your victim's Magicka abilities by 10% for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Ravage_Magicka.png",
	},
	{
		id: "120",
		name: "Ravage Stamina",
		counterEffect: "Restore Stamina",
		summary: "Increases stamina costs",
		potionEffect:
			"Increases the cost of Stamina abilities by 215% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Increases the cost of your victim's Stamina abilities by 10% for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Ravage_Stamina.png",
	},
	{
		id: "121",
		name: "Restore Health",
		counterEffect: "Ravage Health",
		summary: "Restores/drains health immediately and over time, grants major fortitude",
		potionEffect:
			"Restore 8369 Health immediately. Grants Major Fortitude which increases your Health Recovery by 30% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Drains Health from your target, dealing 1342 Poison Damage to your target and restoring 1266 Health to you per second for 2.4 seconds. (10 second cooldown)",
		src: "/images/effects/Restore_Health.png",
	},
	{
		id: "122",
		name: "Restore Magicka",
		counterEffect: "Ravage Magicka",
		summary: "Restores/drains magicka immediately and over time, grants major intellect",
		potionEffect:
			"Restore 7582 Magicka immediately. Grants Major Intellect which increases your Magicka Recovery by 30% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Drains Magicka from your target, increasing the cost of their Magicka abilities by 10%, and restores 238 Magicka to you per second for 3.5 seconds. (10 second cooldown)",
		src: "/images/effects/Restore_Magicka.png",
	},
	{
		id: "123",
		name: "Restore Stamina",
		counterEffect: "Ravage Stamina",
		summary: "Restores/drains stamina immediately and over time, grants major endurance",
		potionEffect:
			"Restore 7582 Stamina immediately. Grants Major Endurance which increases your Stamina Recovery by 30% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Drains Stamina from your target, increasing the cost of their Stamina abilities by 10%, and restores 238 Stamina to you per second for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Restore_Stamina.png",
	},
	{
		id: "124",
		name: "Speed",
		counterEffect: "Hindrance",
		summary: "Alters movement speed",
		potionEffect:
			"Grants Major Expedition which increases your Movement Speed by 30% for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts Hindrance to your target and grants you Major Expedition, reducing their Movement Speed by 40% and increasing your Movement Speed by 30% for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Speed.png",
	},
	{
		id: "125",
		name: "Spell Critical",
		counterEffect: "Uncertainty",
		summary: "Alters spell critical",
		potionEffect:
			"Grants Major Prophecy which gives you 2629 Spell Critical Rating for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts Minor Uncertainty to your target and grants you Minor Prophecy, reducing their Weapon and Spell Critical by 1320 and increasing your Spell Critical by 1314 for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Spell_Critical.png",
	},
	{
		id: "126",
		name: "Timidity",
		counterEffect: "Heroism",
		summary: "Removes generated ultimate",
		potionEffect:
			"Grants you Minor Timidity, consuming 1 Ultimate every 1.5 seconds for 47.6 seconds. (45s cooldown)",
		poisonEffect:
			"Inflicts Minor Timidity on your target, consuming 1 Ultimate every 1.5 seconds for 2.3 seconds. (10s cooldown)",
		src: "/images/effects/Timidity.png",
	},
	{
		id: "127",
		name: "Uncertainty",
		counterEffect: "Spell Critical",
		summary: "Reduces critical chance rate",
		potionEffect:
			"Applies Minor Uncertainty to you, reducing all critical ratings by 1320 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies Minor Uncertainty to your victim, reducing all critical ratings by 1320 for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Uncertainty.png",
	},
	{
		id: "128",
		name: "Unstoppable",
		counterEffect: "Entrapment",
		summary: "Grants crowd control immunity, immobilises",
		potionEffect:
			"Become immune to knockback and disabling effects for 10.4 seconds. (45 second cooldown)",
		poisonEffect:
			"Immobilizes your target and grants you Unstoppable, rendering you immune to control effects for 3.9 seconds. This poison will also break you free of ongoing control effects. (10 second cooldown)",
		src: "/images/effects/Unstoppable.png",
	},
	{
		id: "129",
		name: "Vitality",
		counterEffect: "Defile",
		summary: "Increases healing taken",
		potionEffect:
			"Grants you Major Vitality, increasing your healing taken by 16% for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts Minor Defile to your target and grants you Minor Vitality, reducing their healing taken by 8% while increasing your healing taken by 8% for 3.9 seconds. (10 second cooldown)",
		src: "/images/effects/Vitality.png",
	},
	{
		id: "130",
		name: "Vulnerability",
		counterEffect: "Protection",
		summary: "Increases damage taken",
		potionEffect:
			"Grants you Minor Vulnerability, increasing your damage taken by 5% for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts Minor Vulnerability, increasing damage your victim takes by 5% for 3.9 seconds. (10 second cooldown)",
		src: "/images/effects/Vulnerability.png",
	},
	{
		id: "131",
		name: "Weapon Critical",
		counterEffect: "Enervation",
		summary: "Increases damage taken",
		potionEffect:
			"Grants you Major Savagery which gives you 2629 Weapon Critical Rating for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts Minor Enervation to your target and grants you Minor Savagery, reducing their Critical Damage by 10% and increasing your Weapon Critical by 1314 for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Weapon_Critical.png",
	},
];

export default EffectsData;
