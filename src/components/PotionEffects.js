import SectionHeader from "./UI/SectionHeader";
import EffectsData from "../EffectsData";
import Effect from "./Effect";

export default function PotionEffects(props) {
	return (
		<div className='mt-6'>
			<SectionHeader title={"Selections"} />
			{/* <SelectedIngredients
				selectedIngredients={selectedIngredients}
				deselectIngredient={deselectIngredient}
				effects={effects}
			/> */}

			<SectionHeader title={"Add Effects"} />
			<div className='overflow-scroll border h-80'>
				{EffectsData.map((effect) => {
					return (
						<Effect
							key={effect.id}
							id={effect.id}
						/>
					);
				})}
			</div>
		</div>
	);
}
