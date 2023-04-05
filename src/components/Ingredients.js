import Ingredient from "./Ingredient";
import IngredientsData from "../IngredientsData";
import SelectedIngredients from "./SelectedIngredients";
import { useState } from "react";
import SectionHeader from "./UI/SectionHeader";

function getIncompability(effects) {
	let incompatible = [];
	IngredientsData.forEach((ingredient) => {
		if (
			!effects.includes(ingredient.effect1) &&
			!effects.includes(ingredient.effect2) &&
			!effects.includes(ingredient.effect3) &&
			!effects.includes(ingredient.effect4)
		) {
			incompatible.push(ingredient.id);
		}
	});
	return incompatible;
}

export default function Ingredients(props) {
	const [selectedIngredients, setSelectedIngredients] = useState([]);
	const [incompatibleIngredients, setIncompatibleIngredients] = useState([]);
	const [effects, setEffects] = useState([]);
	const [disableAddButtons, setDisableAddButtons] = useState(false);

	const selectIngredient = (id) => {
		// The new ingredient's effects are retrieved
		let newEffects = [
			IngredientsData[id].effect1,
			IngredientsData[id].effect2,
			IngredientsData[id].effect3,
			IngredientsData[id].effect4,
		];
		// And if there's room, the ingredient and it's effects are updated in state
		if (selectedIngredients.length < 3) {
			setSelectedIngredients([...selectedIngredients, id]);
			const allEffects = [...effects, ...newEffects];
			setEffects(allEffects);
			setIncompatibleIngredients(getIncompability(allEffects));
		}

		// Upon adding final ingredient choice...
		if (selectedIngredients.length === 2) {
			setDisableAddButtons(true);
		}
	};

	const deselectIngredient = (id) => {
		const ingredientIndex = selectedIngredients.indexOf(id);
		setSelectedIngredients(
			selectedIngredients.filter((ingredientID) => id !== ingredientID)
		);

		// Upon removing an ingredient to make way for another final choice...
		if (selectedIngredients.length === 3) {
			setDisableAddButtons(false);
		}

		if (
			selectedIngredients.length === 3 ||
			selectedIngredients.length === 2
		) {
			const start = ingredientIndex * 4;
			const updatedEffects = [...effects];
			updatedEffects.splice(start, 4); // This method RETURNS the removed effects, can be problematic.
			setEffects(updatedEffects);
			setIncompatibleIngredients(getIncompability(updatedEffects));
		}
		// Upon removing the final remaining ingredient, reset incompabitibility.
		if (selectedIngredients.length === 1) {
			setIncompatibleIngredients([]);
			setEffects([]);
		}
	};

	let displayIngredients = [];
	IngredientsData.forEach((ingredient) => {
		if (!incompatibleIngredients.includes(ingredient.id)) {
			displayIngredients.push(ingredient);
		}
	});

	return (
		<div className='mt-6'>
			<SectionHeader title={'Selections'} />
			<SelectedIngredients
				selectedIngredients={selectedIngredients}
				deselectIngredient={deselectIngredient}
			/>
			{/* <div className='mt-2 text-center'>
				<button className='px-4 py-2 mt-4 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-400'>
					Calculate
				</button>
			</div> */}

			<SectionHeader title={'Expected Result'} />
			<div className='text-center border'>
				<p>Not enough reagents</p>
			</div>

			<SectionHeader title={'Add Ingredients'} />
			<div className='overflow-scroll border h-80'>
				{displayIngredients.map((ingredient) => {
					let isSelected = false;
					if (selectedIngredients.includes(ingredient.id)) {
						isSelected = true;
					}

					return (
						<Ingredient
							key={ingredient.id}
							selectIngredient={selectIngredient}
							deselectIngredient={deselectIngredient}
							id={ingredient.id}
							effects={effects}
							isSelected={isSelected}
							isDisabled={disableAddButtons}
						/>
					);
				})}
			</div>
		</div>
	);
}
