import { useState } from "react";

import Card from "./UI/Card";
import PotionEffects from "./Effects/PotionEffects";
import Ingredients from "./Ingredients/Ingredients";

export default function Content() {
	const [selectionMode, setSelectionMode] = useState('effects'); // Set to effects so refreshing goes straight to effects during dev

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
