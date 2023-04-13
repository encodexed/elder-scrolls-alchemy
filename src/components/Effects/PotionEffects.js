import SectionHeader from "../UI/SectionHeader";
import EffectsData from "../../EffectsData";
import Effect from "./Effect";
import { useState } from "react";

export default function PotionEffects(props) {

	const [selectedEffects, setSelectedEffects] = useState(['104', '102']);
	const [disableAddButtons, setDisableAddButtons] = useState(false);

	const selectEffect = (id) => {
		if (selectedEffects.length < 3) {
			setSelectedEffects([...selectedEffects, id])
		}

		// Upon adding final effects choice, disable the buttons.
		if (selectedEffects.length === 2) {
			setDisableAddButtons(true);
		}
	}

	return (
		<div className='mt-6'>
			<SectionHeader title={"Add Effects"} link={props.ingredientsClickHandler} linkContent={'show ingredients instead'} />
			<div className='h-48 overflow-scroll border'>
				{EffectsData.map((effect) => {
					return (
						<Effect
							key={"z" + effect.id}
							id={effect.id}
							selectEffect={selectEffect}
							isDisabled={disableAddButtons}
						/>
					);
				})}
			</div>
		</div>
	);
}
