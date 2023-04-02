import Ingredient from "./Ingredient";
import IngredientsData from "../IngredientsData";

export default function Ingredients(props) {
	return (
		<div className='mt-4'>
			{IngredientsData.map((ingredient) => {
				return (
					<Ingredient
						key={ingredient.id}
						name={ingredient.name}
						src={ingredient.src}
						effect1={ingredient.effect1}
						effect2={ingredient.effect2}
						effect3={ingredient.effect3}
						effect4={ingredient.effect4}
					/>
				);
			})}
		</div>
	);
}
