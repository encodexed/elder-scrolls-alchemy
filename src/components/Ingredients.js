import Ingredient from "./Ingredient";
import IngredientsData from "../IngredientsData";
import SelectedIngredients from "./SelectedIngredients";
import { useState } from "react";

export default function Ingredients(props) {
	const [selectedIngredients, setSelectedIngredients] = useState([]);
	
	const selectIngredient = (id) => {
		if (selectedIngredients.length < 3) {
			setSelectedIngredients([...selectedIngredients, id]);
		}
	}

	const deselectIngredient = (id) => {
		setSelectedIngredients(selectedIngredients.filter(ingredientID => id !== ingredientID));
	}

	return (
		<>
			<SelectedIngredients selectedIngredients={selectedIngredients} />
			<div className="mt-2 text-center">
				<button className='px-4 py-2 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-400'>
					Calculate
				</button>
			</div>

			<div className='mt-4'>
				{IngredientsData.map((ingredient) => {
					return (
						<Ingredient
							selectIngredient={selectIngredient}
							deselectIngredient={deselectIngredient}
							key={ingredient.id}
							id={ingredient.id}
						/>
					);
				})}
			</div>
		</>
	);
}
