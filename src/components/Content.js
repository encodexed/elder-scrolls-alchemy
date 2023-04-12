import { useState } from "react";

import Card from "./UI/Card";
// import Tabs from "./Tabs";
import PotionEffects from "./Effects/PotionEffects";
import Ingredients from "./Ingredients/Ingredients";

export default function Content() {
	const [selectionMode, setSelectionMode] = useState('ingredients');

	const ingredientsClickHandler = () => {
		setSelectionMode('ingredients');
	};

	const effectsClickHandler = () => {
		setSelectionMode('effects');
	};

	return (
		<div className='mx-auto grow'>
			<Card>
				{selectionMode === 'effects' && (
					<PotionEffects
						selectionMode={selectionMode}
						ingredientsClickHandler={ingredientsClickHandler}
						effectsClickHandler={effectsClickHandler}
					/>
				)}
				{selectionMode === 'ingredients' && (
					<Ingredients
						selectionMode={selectionMode}
						ingredientsClickHandler={ingredientsClickHandler}
						effectsClickHandler={effectsClickHandler}
					/>
				)}
			</Card>
		</div>
	);
}
