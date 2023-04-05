// import { useState } from "react";

import AddButton from "./UI/AddButton";
import RemoveButton from "./UI/RemoveButton"
import Icon from "./UI/Icon";
import IngredientsData from "../IngredientsData";
import DisabledAddButton from "./UI/DisabledAddButton";

export default function Ingredient(props) {
	const ingredient = IngredientsData[props.id];

	const addSelectionHandler = () => {
		props.selectIngredient(props.id);
	}

	const removeSelectionHandler = () => {
		props.deselectIngredient(props.id);
	}

	const effectsStyle = 'text-sm leading-none text-center text-slate-500';

	return (
		<div className='flex'>
			<div>
				<Icon src={ingredient.src} />
			</div>
			<div className='flex-1 w-40 my-auto justify-content-center'>
				<h3 className='text-center'>{ingredient.name}</h3>
			</div>
			<div className='my-auto flex-0'>
				{!props.isSelected && !props.isDisabled && <AddButton onClick={addSelectionHandler} />}
				{!props.isSelected && props.isDisabled && <DisabledAddButton />}
				{props.isSelected && <RemoveButton onClick={removeSelectionHandler} />}
			</div>
			<div className='flex-1 my-auto ml-2'>
				<p className={effectsStyle}>
					{ingredient.effect1}
				</p>
				<p className={effectsStyle}>
					{ingredient.effect2}
				</p>
			</div>
			<div className='flex-1 my-auto'>
				<p className={effectsStyle}>
					{ingredient.effect3}
				</p>
				<p className={effectsStyle}>
					{ingredient.effect4}
				</p>
			</div>
		</div>
	);
}
