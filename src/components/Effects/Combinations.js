import SectionHeader from "../UI/SectionHeader";
import { useState, useEffect } from "react";
import IngredientsData from "../../IngredientsData";
import EffectsData from "../../EffectsData";
import Combination from "./Combination";

export default function Combinations(props) {
	// An array of arrays that work together to make the desired concoction.
	const [possibleCombinations, setPossibleCombinations] = useState([]);
	// A boolean to indicate if desired concoctions don't exist by law.
	// const [isImpossible, setIsImpossible] = useState(false);
	// When enabled, strict search prevents showing concoctions with side effects the user didn't specify.
	// However, some effects cannot exist on their own, as in the case of Cowardice.
	const [strictMode, setStrictMode] = useState(true);

	useEffect(() => {
		if (props.selectedEffectsIDs.length > 0) {
			let ingredientsIDs = [];
			// Gather selected effect's counter-effects
			let counterEffects = [];
			props.selectedEffectsIDs.forEach((effectID) => {
				const counterEffect = EffectsData[effectID - 100].counterEffect;
				counterEffects.push(counterEffect);
			});
			props.selectedEffectsIDs.forEach((effectID) => {
				// Gather data about the effect
				const effect = EffectsData[effectID - 100];
				// Gather data about the ingredients' effects
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
						ingredientsIDs.push(ingredient.id);
					}
				});
			});

			// For a potion with 3 effects to be possible at all, it must have at least 3 ingredients mentioned twice in the eligibleIngredients array.
			// For a potion with 2 effects to be posssible at all, it must have at least 1 ingredient mentioned twice in the eligibleIngredients array.
			// For this 2 effect potion, at least one ingredient MUST have both effects. There is no way around it.
			// For 2 effect potions, identify the critical ingredient(s). If there is none, gg. Once you have that, divide other ingredients by what they offer.
			// eg. Bugloss has restore health and magicka. Butterfly wing, crimson nirnroot luminous russula, mountain flower, water hyacinth restore health. Dragon rheum, lady's smock restore magicka.
			// You may need to check that your 2 effect potion combinations don't accidentally give a 3rd effect.
			// eg. Potion of Defile, Invisible. Spider Egg is critical ingredient. Adding Blue Entoloma for invisible, and Clam Gall for defile accidentally has created hindrance.
			// Perhaps every combination must be put to the test to see if there are unwanted side effects.
			// Side note, adding opposing effects eg. Ravage Health and Restore Health is silly so disable counter effects from being selected.
			ingredientsIDs.sort();

			if (props.selectedEffectsIDs.length === 1) {
				// Every possible combination between eligible ingredients when only one effect is selected.
				let combinations = [];
				for (let i = 0; i < ingredientsIDs.length; i++) {
					for (let j = i + 1; j < ingredientsIDs.length; j++) {
						if (strictMode) {
							// Sometimes, eligible ingredients will produce an extra unwanted effect. Filter this out.
							let sideEffect = false;
							let selectedEffectsNames = [];
							// Get all names of the effects for comparison.
							props.selectedEffectsIDs.forEach((id) => {
								selectedEffectsNames.push(EffectsData[id - 100].name);
							});
							const iEffects = [
								IngredientsData[ingredientsIDs[i]].effect1,
								IngredientsData[ingredientsIDs[i]].effect2,
								IngredientsData[ingredientsIDs[i]].effect3,
								IngredientsData[ingredientsIDs[i]].effect4,
							];
							const jEffects = [
								IngredientsData[ingredientsIDs[j]].effect1,
								IngredientsData[ingredientsIDs[j]].effect2,
								IngredientsData[ingredientsIDs[j]].effect3,
								IngredientsData[ingredientsIDs[j]].effect4,
							];
							// A side effect is proven if present in both ingredients but not selected by the user.
							iEffects.forEach((iEffect) => {
								if (
									jEffects.includes(iEffect) &&
									!selectedEffectsNames.includes(iEffect)
								) {
									sideEffect = true;
								}
							});
							// Commit a side-effect free combination to state.
							if (!sideEffect) {
								combinations.push([
									ingredientsIDs[i],
									ingredientsIDs[j],
									"-1",
								]);
							}
						} else {
							combinations.push([
								ingredientsIDs[i],
								ingredientsIDs[j],
								"-1",
							]);
						}
					}
				}
				setPossibleCombinations([...combinations]);
			}
		} else {
			// Reset.
			setPossibleCombinations([]);
		}
	}, [props.selectedEffectsIDs, strictMode]);

	const toggleStrictMode = () => {
		setStrictMode((prevState) => {
			return !prevState;
		});
   };
   
   const disableStrictMode = () => {
      setStrictMode(false);
   }

   // For when Cowardice or other effects that cannot exist on their own are selected
	let strictSetting = strictMode
		? "disable strict mode"
		: "enable strict mode";
	if (
		props.selectedEffectsIDs.length === 1 &&
		possibleCombinations.length === 0
	) {
		return (
			<>
				<SectionHeader
					title={"Possible Combinations"}
					link={toggleStrictMode}
					linkContent={strictSetting}
				/>
				<div className='flex flex-col h-48 text-center border'>
					<p className='px-4 my-auto'>
						Unfortunately, concoctions with this effect do not exist.
						Consider <span className='text-indigo-800 underline cursor-pointer' onClick={disableStrictMode}>disabling strict mode</span>. This will allow the assistant
						to show you potions that may contain side effects.
					</p>
				</div>
			</>
		);
   }

   // Initial state
   if (props.selectedEffectsIDs.length === 0) {
      return (
			<>
				<SectionHeader
					title={"Possible Combinations"}
					link={toggleStrictMode}
					linkContent={strictSetting}
				/>
				<div className='flex flex-col h-48 text-center border'>
					<p className='px-4 my-auto'>
                  Add effects from above to start seeing results.<br/>
                  <span className='text-indigo-800 underline cursor-pointer' onClick={disableStrictMode}>Disable strict mode</span> to allow combinations with unselected side effects.
					</p>
				</div>
			</>
		);
   }

	return (
		<>
			<SectionHeader
				title={"Possible Combinations"}
				link={toggleStrictMode}
				linkContent={strictSetting}
			/>
			<div className='h-48 overflow-scroll border'>
				{possibleCombinations.map((combination) => {
					const thisKey = combination.toString();
					return (
						<Combination
							key={thisKey}
							thisKey={thisKey}
							ingredients={combination}
						/>
					);
				})}
			</div>
		</>
	);
}
