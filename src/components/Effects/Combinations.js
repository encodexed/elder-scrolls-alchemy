import SectionHeader from "../UI/SectionHeader";
import { useState, useEffect } from "react";
import IngredientsData from "../../IngredientsData";
import EffectsData from "../../EffectsData";

export default function Combinations(props) {
   const [eligibleIngredients, setEligibleIngredients] = useState([]);

	useEffect(() => {
		let ingredients = [];
      // Gather selected effect's counter-effects
      let counterEffects = [];
		props.selectedEffectsIDs.forEach((effectID) => {
			const counterEffect = EffectsData[effectID - 100].counterEffect;
			counterEffects.push(counterEffect);
		});
      props.selectedEffectsIDs.forEach((effectID) => {
         // Gather data about the effect
         const effect = EffectsData[effectID - 100];
         // Gather data about the ingredients
			IngredientsData.forEach((ingredient) => {
				const ingEffects = [
					ingredient.effect1,
					ingredient.effect2,
					ingredient.effect3,
					ingredient.effect4,
				];
            // Check for conflicts between effects
				let conflict = false;
				counterEffects.forEach((counterEffect) => {
					if (ingEffects.includes(counterEffect)) {
						conflict = true;
					}
				});
            // If everything's good, mark it eligible
				if (ingEffects.includes(effect.name) && !conflict) {
					ingredients.push(ingredient.name);
				}
			});
		});
		setEligibleIngredients([...ingredients]);
	}, [props.selectedEffectsIDs]);

	return (
		<>
			<SectionHeader title={"Possible Combinations"} />
			<div className='h-48 overflow-scroll border'>Yeah!</div>
		</>
	);
}
