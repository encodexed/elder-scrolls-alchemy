import IngredientsData from "../../IngredientsData";
import SelectedIngredient from "./SelectedIngredient";
import { useState, useEffect } from "react";
import Results from "./Results";
import EffectsData from "../../EffectsData";
import SectionHeader from "../UI/SectionHeader";

function EmptySlot(id) {
	this.id = id;
	this.name = "Empty";
	this.effect1 = "-";
	this.effect2 = "-";
	this.effect3 = "-";
	this.effect4 = "-";
	this.src = "/images/Empty.png";
}

export default function SelectedIngredients(props) {
	const [matchedIngredients, setMatchedIngredients] = useState([]);
	const [counterEffects, setCounterEffects] = useState([]);

	useEffect(() => {
		if (props.effects.length >= 8) {
			const effects = [...props.effects];
			// Determine if there are more than two of any effect, indicating a match.
			const matches = effects.filter(
				(item, index) => index !== effects.indexOf(item)
			);
			// Determine only unique matches.
			const uniqueMatches = matches.filter(
				(item, index) => index === matches.indexOf(item)
			);
			// Determine if any effects counter the effect of the matches
			let cancelled = [];
			uniqueMatches.forEach((match) => {
				EffectsData.forEach((effectData) => {
					if (effectData.name === match) {
						effects.forEach((effect) => {
							if (effectData.counterEffect === effect) {
								cancelled.push({
									effect: match,
									counteredBy: effect,
								});
							}
						});
					}
				});
			});

			// Remove countered effects, and mark counters for state update
			let newCounterEffects = [];
			cancelled.forEach((effect) => {
				newCounterEffects.push(effect.counteredBy);
				const index = uniqueMatches.indexOf(effect.effect);
				uniqueMatches.splice(index, 1);
			});

			setCounterEffects([...newCounterEffects]);
			setMatchedIngredients([...uniqueMatches]);
		} else {
			setMatchedIngredients([]);
			setCounterEffects([]);
		}
	}, [props.effects]);

	const ingredient1 =
		IngredientsData[props.selectedIngredients[0]] || new EmptySlot("-1");
	const ingredient2 =
		IngredientsData[props.selectedIngredients[1]] || new EmptySlot("-2");
	const ingredient3 =
		IngredientsData[props.selectedIngredients[2]] || new EmptySlot("-3");

	const deselectHandler1 = () => {
		props.deselectIngredient(ingredient1.id);
	};

	const deselectHandler2 = () => {
		props.deselectIngredient(ingredient2.id);
	};

	const deselectHandler3 = () => {
		props.deselectIngredient(ingredient3.id);
	};

	return (
		<>
			<SectionHeader title={"Selections"} />
			<div className='flex flex-col w-full border border-t-0'>
				<SelectedIngredient
					key={"a" + ingredient1.id}
					matchedEffects={matchedIngredients}
					ingredient={ingredient1}
					deselectHandler={deselectHandler1}
					counterEffects={counterEffects}
				/>
				<SelectedIngredient
					key={"a" + ingredient2.id}
					matchedEffects={matchedIngredients}
					ingredient={ingredient2}
					deselectHandler={deselectHandler2}
					counterEffects={counterEffects}
				/>
				<SelectedIngredient
					key={"a" + ingredient3.id}
					matchedEffects={matchedIngredients}
					ingredient={ingredient3}
					deselectHandler={deselectHandler3}
					counterEffects={counterEffects}
				/>
			</div>
			<Results
				matchedEffects={matchedIngredients}
				counterEffects={counterEffects}
				selectedCount={props.effects.length}
			/>
		</>
	);
}