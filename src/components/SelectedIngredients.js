import IngredientsData from "../IngredientsData";
import SelectedIngredient from "./SelectedIngredient";

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
	const ingredient1 = IngredientsData[props.selectedIngredients[0]] || new EmptySlot("empty1");
	const ingredient2 = IngredientsData[props.selectedIngredients[1]] || new EmptySlot("empty2");
	const ingredient3 = IngredientsData[props.selectedIngredients[2]] || new EmptySlot("empty3");

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
		<div className='flex w-full py-2 space-x-3 border border-t-0'>
			<SelectedIngredient
				key={"a" + ingredient1.id}
				ingredient={ingredient1}
				deselectHandler={deselectHandler1}
			/>
			<SelectedIngredient
				key={"a" + ingredient2.id}
				ingredient={ingredient2}
				deselectHandler={deselectHandler2}
			/>
			<SelectedIngredient
				key={"a" + ingredient3.id}
				ingredient={ingredient3}
				deselectHandler={deselectHandler3}
			/>
		</div>
	);
}
