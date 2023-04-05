import IngredientsData from "../IngredientsData";
import SelectedIngredient from "./SelectedIngredient";

export default function SelectedIngredients(props) {
	const ingredient1 = IngredientsData[props.selectedIngredients[0]] || {
		id: "empty1",
		name: "Empty",
		effect1: "-",
		effect2: "-",
		effect3: "-",
		effect4: "-",
		src: "/images/Empty.png",
	};

	const ingredient2 =
		IngredientsData[props.selectedIngredients[1]] || {
			id: "empty2",
			name: "Empty",
			effect1: "-",
			effect2: "-",
			effect3: "-",
			effect4: "-",
			src: "/images/Empty.png",
		};

	const ingredient3 =
		IngredientsData[props.selectedIngredients[2]] || {
			id: "empty3",
			name: "Empty",
			effect1: "-",
			effect2: "-",
			effect3: "-",
			effect4: "-",
			src: "/images/Empty.png",
		};

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
		<div className='flex w-full max-w-md mx-auto mt-6 space-x-3'>
			<SelectedIngredient
				key={'a' + ingredient1.id}
				ingredient={ingredient1}
				deselectHandler={deselectHandler1}
			/>
			<SelectedIngredient
				key={'a' + ingredient2.id}
				ingredient={ingredient2}
				deselectHandler={deselectHandler2}
			/>
			<SelectedIngredient
				key={'a' + ingredient3.id}
				ingredient={ingredient3}
				deselectHandler={deselectHandler3}
			/>
		</div>
	);
}
