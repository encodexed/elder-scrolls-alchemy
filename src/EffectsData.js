const EffectsData = [
	{
		id: "100",
		name: "Breach",
		counterEffect: "Increase Spell Resist",
		potionEffect:
			"Applies Minor Breach to you, reducing your Spell Resistance by 2974 for ... seconds. (45 second cooldown)",
		poisonEffect:
			"Applies Minor Breach to your target, reducing Spell Resistance by 2974 for ... seconds. (10 second cooldown)",
		src: "/images/effects/Breach.png",
	},
	{
		id: "101",
		name: "Cowardice",
		counterEffect: "Increase Spell Power",
		potionEffect:
			"Applies Minor Cowardice to you, reducing your Weapon and Spell Damage by 215 for ... seconds. (45 second cooldown)",
		poisonEffect:
			"Applies Minor Cowardice to your target, reducing their Weapon and Spell Damage by 215 for ... seconds.",
		src: "/images/effects/Cowardice.png",
	},
	{
		id: "102",
		name: "Defile",
		counterEffect: "Vitality",
		potionEffect:
			"Grants you Minor Defile, reducing your healing taken by 8% for ... seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts Minor Defile, reducing healing your victim takes by 8% for ... seconds. (10 second cooldown)",
		src: "/images/effects/Defile.png",
   },
   {
		id: "103",
		name: "Detection",
		counterEffect: "Invisible",
		potionEffect:
			"Increase your Stealth Detection by 20 meters for ... seconds. (45 second cooldown)",
		poisonEffect:
			"Exposes your victim, preventing them from stealthing for ... seconds. (10 second cooldown)",
		src: "/images/effects/Detection.png",
   },
   {
		id: "104",
		name: "Enervation",
		counterEffect: "Weapon Critical",
		potionEffect:
			"Applies Minor Enervation to you, reducing your critical damage by 12% for ... seconds. (45 second cooldown)",
		poisonEffect:
			"Applies Minor Enervation to your victim, reducing all Critical Damage by 12% for ... seconds. (10 second cooldown)",
		src: "/images/effects/Enervation.png",
   },
];

export default EffectsData;
