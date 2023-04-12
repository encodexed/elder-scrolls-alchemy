import AddButton from "../UI/AddButton";
import Icon from "../UI/Icon";
import IngredientsData from "../../IngredientsData";
import DisabledAddButton from "../UI/DisabledAddButton";

export default function Ingredient(props) {
	if (props.isSelected) {
		return <></>
	}
	const { name, effect1, effect2, effect3, effect4, src } = IngredientsData[props.id];

	const addSelectionHandler = () => {
		props.selectIngredient(props.id);
	};

	const incompatibleStyle = "text-sm leading-none text-center text-slate-500";
	const compatibleStyle = "text-sm leading-none text-center text-green-500";
	let style1 = incompatibleStyle;
	let style2 = incompatibleStyle;
	let style3 = incompatibleStyle;
	let style4 = incompatibleStyle;

	if (props.effects.includes(effect1)) {
		style1 = compatibleStyle;
	}
	if (props.effects.includes(effect2)) {
		style2 = compatibleStyle;
	}
	if (props.effects.includes(effect3)) {
		style3 = compatibleStyle;
	}
	if (props.effects.includes(effect4)) {
		style4 = compatibleStyle;
	}

	return (
		<div className='flex'>
			<div>
				<Icon src={src} />
			</div>
			<div className='flex-1 w-40 my-auto justify-content-center'>
				<h3 className='text-center'>{name}</h3>
			</div>
			<div className='my-auto flex-0'>
				{!props.isDisabled && (
					<AddButton onClick={addSelectionHandler} />
				)}
				{props.isDisabled && <DisabledAddButton />}
			</div>
			<div className='flex-1 my-auto ml-2'>
				<p className={style1}>{effect1}</p>
				<p className={style2}>{effect2}</p>
			</div>
			<div className='flex-1 my-auto'>
				<p className={style3}>{effect3}</p>
				<p className={style4}>{effect4}</p>
			</div>
		</div>
	);
}
