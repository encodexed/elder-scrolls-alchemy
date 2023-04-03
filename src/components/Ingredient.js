import { useState } from "react";

import AddButton from "./UI/AddButton";
import RemoveButton from "./UI/RemoveButton"
import Icon from "./UI/Icon";
import IngredientsData from "../IngredientsData";

export default function Ingredient(props) {
	const [isSelected, setIsSelected] = useState(false);
	const ingredient = IngredientsData[props.id];

	const addSelectionHandler = () => {
		setIsSelected(true);
		props.selectIngredient(props.id);
	}

	const removeSelectionHandler = () => {
		setIsSelected(false);
		props.deselectIngredient(props.id);
	}

	return (
		<div className='flex'>
			<div>
				<Icon src={ingredient.src} />
			</div>
			<div className='flex-1 w-40 my-auto justify-content-center'>
				<h3 className='text-center'>{ingredient.name}</h3>
			</div>
			<div className='my-auto flex-0'>
				{!isSelected && <AddButton onClick={addSelectionHandler} />}
				{isSelected && <RemoveButton onClick={removeSelectionHandler} />}
			</div>
			<div className='flex-1 my-auto ml-2'>
				<p className='text-sm text-center text-slate-500'>
					{ingredient.effect1}
				</p>
				<p className='text-sm text-center text-slate-500'>
					{ingredient.effect2}
				</p>
			</div>
			<div className='flex-1 my-auto'>
				<p className='text-sm text-center text-slate-500'>
					{ingredient.effect3}
				</p>
				<p className='text-sm text-center text-slate-500'>
					{ingredient.effect4}
				</p>
			</div>
		</div>
	);
}
