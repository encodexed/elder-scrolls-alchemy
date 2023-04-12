import { useState, useEffect } from "react";
import EffectsData from "../../EffectsData";
import ResultingPotion from "./ResultingPotion";
import ResultingPoison from "./ResultingPoison";

export default function Results(props) {
	const [showPotions, setShowPotions] = useState(true);
	const [effectInfo, setEffectInfo] = useState([]);

	useEffect(() => {
		let matchInfo = [];
		props.matches.forEach((effect) => {
			for (let i = 0; i < EffectsData.length; i++) {
				if (EffectsData[i].name === effect) {
					matchInfo.push(EffectsData[i]);
				}
			}
		});

		setEffectInfo([...matchInfo]);
	}, [props.matches]);

	const toggleClickHandler = () => {
		setShowPotions((prevState) => {
			return !prevState;
		});
	};

	return (
		<>
			{showPotions && (
				<ResultingPotion
					effectInfo={effectInfo}
					toggleView={toggleClickHandler}
				/>
			)}
			{!showPotions && (
				<ResultingPoison
					effectInfo={effectInfo}
					toggleView={toggleClickHandler}
				/>
			)}
		</>
	);
}
