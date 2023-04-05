import Ingredient from "./Ingredient";
import IngredientsData from "../IngredientsData";
import SelectedIngredients from "./SelectedIngredients";
import { useState } from "react";

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
			setEffects([...effects, ...newEffects]);

			// An array is created to act upon state changes before they're scheduled
			let allEffects = [...effects, ...newEffects];
			let updateIncompability = [];
			// And unselected ingredients are checked to see if they are incompatible with the selected ingredients
			IngredientsData.forEach((ingredient) => {
				if (
					!allEffects.includes(ingredient.effect1) &&
					!allEffects.includes(ingredient.effect2) &&
					!allEffects.includes(ingredient.effect3) &&
					!allEffects.includes(ingredient.effect4)
				) {
					updateIncompability.push(ingredient.id);
				}
			});
			setIncompatibleIngredients(updateIncompability);
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

		// If there are still ingredients selected...
		if (
			selectedIngredients.length === 3 ||
			selectedIngredients.length === 2
		) {
			// update the effects array
			const start = ingredientIndex * 4;
			const updatedEffects = [...effects];
			updatedEffects.splice(start, 4); // This method RETURNS the removed effects, can be problematic.
			setEffects(updatedEffects);
			// update the incompatibility array
			let updateIncompability = [];
			IngredientsData.forEach((ingredient) => {
				if (
					!updatedEffects.includes(ingredient.effect1) &&
					!updatedEffects.includes(ingredient.effect2) &&
					!updatedEffects.includes(ingredient.effect3) &&
					!updatedEffects.includes(ingredient.effect4)
				) {
					updateIncompability.push(ingredient.id);
				}
			});
			setIncompatibleIngredients(updateIncompability);
		}

		// Update the incompatibility array now


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
		<>
			<SelectedIngredients
				selectedIngredients={selectedIngredients}
				deselectIngredient={deselectIngredient}
			/>
			<div className='mt-2 text-center'>
				<button className='px-4 py-2 mt-4 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-400'>
					Calculate
				</button>
			</div>

			<div className='mt-4 overflow-scroll border h-96'>
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
							isSelected={isSelected}
							isDisabled={disableAddButtons}
						/>
					);
				})}
			</div>
		</>
	);
}
