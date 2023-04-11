// import { useState } from "react";

import AddButton from "../UI/AddButton";
import RemoveButton from "../UI/RemoveButton";
import Icon from "../UI/Icon";
import IngredientsData from "../../IngredientsData";
import DisabledAddButton from "../UI/DisabledAddButton";

export default function Ingredient(props) {
	const ingredient = IngredientsData[props.id];

	const addSelectionHandler = () => {
		props.selectIngredient(props.id);
	};

	const removeSelectionHandler = () => {
		props.deselectIngredient(props.id);
	};

	const incompatibleStyle = "text-sm leading-none text-center text-slate-500";
	const compatibleStyle = "text-sm leading-none text-center text-green-500";
	let style1 = incompatibleStyle;
	let style2 = incompatibleStyle;
	let style3 = incompatibleStyle;
	let style4 = incompatibleStyle;

	if (props.effects.includes(ingredient.effect1)) {
		style1 = compatibleStyle;
	}
	if (props.effects.includes(ingredient.effect2)) {
		style2 = compatibleStyle;
	}
	if (props.effects.includes(ingredient.effect3)) {
		style3 = compatibleStyle;
	}
	if (props.effects.includes(ingredient.effect4)) {
		style4 = compatibleStyle;
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
				{!props.isSelected && !props.isDisabled && (
					<AddButton onClick={addSelectionHandler} />
				)}
				{!props.isSelected && props.isDisabled && <DisabledAddButton />}
				{props.isSelected && (
					<RemoveButton onClick={removeSelectionHandler} />
				)}
			</div>
			<div className='flex-1 my-auto ml-2'>
				<p className={style1}>{ingredient.effect1}</p>
				<p className={style2}>{ingredient.effect2}</p>
			</div>
			<div className='flex-1 my-auto'>
				<p className={style3}>{ingredient.effect3}</p>
				<p className={style4}>{ingredient.effect4}</p>
			</div>
		</div>
	);
}
