import IngredientsData from "../../IngredientsData";
import SelectedIngredient from "./SelectedIngredient";
import { useState, useEffect } from "react";
import Results from "./Results";
import EffectsData from "../../EffectsData";
import CounterEffect from "./CounterEffect";
import SectionHeader from "../UI/SectionHeader";

function EmptySlot(id) {
	this.id = id;
	this.name = "Empty";
	this.effect1 = "-";
	this.effect2 = "-";
	this.effect3 = "-";
	this.effect4 = "-";
	this.src = "/images/ingredients/Empty.png";
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

	if (props.selectedIngredients.length === 0) {
		return (
			<>
				<SectionHeader title={"Expected Results"} />
				<Results matches={matchedIngredients} />
				<SectionHeader title={"Selections"} />
				<div className='text-center border border-t-0'>
					<p className='text-red-500'>No ingredients selected yet.</p>
				</div>
			</>
		);
	}

	const ingredient1 =
		IngredientsData[props.selectedIngredients[0]];
	const ingredient2 =
		IngredientsData[props.selectedIngredients[1]] || new EmptySlot("empty2");
	const ingredient3 =
		IngredientsData[props.selectedIngredients[2]] || new EmptySlot("empty3");

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
			<SectionHeader title={"Expected Results"} />
			<Results matches={matchedIngredients} />
			<SectionHeader title={"Selections"} />
			<div className='flex w-full py-2 space-x-3 border border-t-0'>
				<SelectedIngredient
					key={"a" + ingredient1.id}
					matches={matchedIngredients}
					ingredient={ingredient1}
					deselectHandler={deselectHandler1}
					counterEffects={counterEffects}
				/>
				<SelectedIngredient
					key={"a" + ingredient2.id}
					matches={matchedIngredients}
					ingredient={ingredient2}
					deselectHandler={deselectHandler2}
					counterEffects={counterEffects}
				/>
				<SelectedIngredient
					key={"a" + ingredient3.id}
					matches={matchedIngredients}
					ingredient={ingredient3}
					deselectHandler={deselectHandler3}
					counterEffects={counterEffects}
				/>
			</div>
			{counterEffects.length > 0 && (
				<CounterEffect counterEffects={counterEffects} />
			)}
		</>
	);
}
