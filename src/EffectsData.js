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
		summary: "Increases physical resistance",
		potionEffect:
			"Increases your Physical Resistance by 5280 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Reduces your target's Physical Resistance by 1320, and increases your Physical Resistance by 1320 for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Increase_Armor.png",
	},
	
];

export default EffectsData;
