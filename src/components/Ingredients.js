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
			<SelectedIngredients selectedIngredients={selectedIngredients} deselectIngredient={deselectIngredient}/>
			<div className="mt-2 text-center">
				<button className='px-4 py-2 mt-4 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-400'>
					Calculate
				</button>
			</div>

			<div className='mt-4'>
				{IngredientsData.map((ingredient) => {
					let isSelected = false;
					if (selectedIngredients.includes(ingredient.id)) {
						isSelected = true;
					}
					return (
						<Ingredient
							selectIngredient={selectIngredient}
							deselectIngredient={deselectIngredient}
							key={ingredient.id}
							id={ingredient.id}
							isSelected={isSelected}
						/>
					);
				})}
			</div>
		</>
	);
}
