import SectionHeader from "../UI/SectionHeader";
import EffectsData from "../../EffectsData";
import Effect from "./Effect";
import { useState } from "react";
import EffectsResults from "./EffectsResults";

export default function PotionEffects(props) {
	const [selectedEffects, setSelectedEffects] = useState([]);
	const [disableAddButtons, setDisableAddButtons] = useState(false);

	const selectEffect = (id) => {
		if (selectedEffects.length < 3) {
			setSelectedEffects([...selectedEffects, id]);
		}

		if (selectedEffects.length === 2) {
			setDisableAddButtons(true);
		}
	};

	const deselectEffect = (id) => {
		setSelectedEffects(
			selectedEffects.filter((effectID) => id !== effectID)
		);
		
		if (selectedEffects.length === 3) {
			setDisableAddButtons(false);
		}
	}

	return (
		<>
			<SectionHeader
				title={"Add Effects"}
				link={props.ingredientsClickHandler}
				linkContent={"show ingredients instead"}
			/>
			<div className='h-48 overflow-scroll border'>
				{EffectsData.map((effect) => {
					let isSelected = false;
					if (selectedEffects.includes(effect.id)) {
						isSelected = true;
					}
					return (
						<Effect
							key={"z" + effect.id}
							id={effect.id}
							selectEffect={selectEffect}
							deselectEffect={deselectEffect}
							isDisabled={disableAddButtons}
							isSelected={isSelected}
						/>
					);
				})}
			</div>
			<EffectsResults selectedEffectsIDs={selectedEffects} />
		</>
	);
}
