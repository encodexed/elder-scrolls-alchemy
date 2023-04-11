import { useState, useEffect } from "react";

import SectionHeader from "../UI/SectionHeader";
import EffectsData from "../../EffectsData";
import ResultingPotion from "./ResultingPotion";
import ResultingPoison from "./ResultingPoison";

export default function Results(props) {
	const [showPotions, setShowPotions] = useState(true);
	const [effectInfo, setEffectInfo] = useState([]);
	const matches = props.matches.length > 0;

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

	const displayNoMatch = () => {
		return (
			<div className='flex text-center border'>
				<p className='flex-1'>The ingredients will not react</p>
			</div>
		);
	};

	const toggleClickHandler = () => {
		setShowPotions((prevState) => {
			return !prevState;
		});
	};

	return (
		<>
			<SectionHeader title={"Expected Result"} />
			{matches && showPotions && (
				<ResultingPotion
					effectInfo={effectInfo}
					toggleView={toggleClickHandler}
				/>
			)}
			{matches && !showPotions && (
				<ResultingPoison
					effectInfo={effectInfo}
					toggleView={toggleClickHandler}
				/>
			)}
			{!matches && displayNoMatch()}
		</>
	);
}
