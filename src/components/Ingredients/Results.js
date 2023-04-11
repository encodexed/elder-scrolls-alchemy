import { useState } from "react";

import SectionHeader from "../UI/SectionHeader";
import EffectsData from "../../EffectsData";
import Card from "../UI/Card";

export default function Results(props) {
	const [showPotions, setShowPotions] = useState(true);
	const matches = props.matches.length > 0;

	let matchInfo = [];
	props.matches.forEach((effect) => {
		for (let i = 0; i < EffectsData.length; i++) {
			if (EffectsData[i].name === effect) {
				matchInfo.push(EffectsData[i]);
			}
		}
	});

	const displayMatch = () => {
		return (
			<div className='border'>
				<Card>
					<div className='flex flex-col text-center'>
						<div className='flex-1'>
							<img
								className='mx-auto'
								src='/images/potions/Increase_Armor.png'
								alt='A potion!'
							/>
						</div>
						<div className='flex flex-col flex-1 text-center'>
							{matchInfo.map((effect) => {
								return (
									<div className='mt-3' key={"m" + effect.name}>
										<p dangerouslySetInnerHTML={{__html: effect.potionEffect}} className='text-sm leading-none' />
									</div>
								);
							})}
						</div>
					</div>
				</Card>
			</div>
		);
	};

	const displayNoMatch = () => {
		return (
			<div className='flex text-center border'>
				<p className='flex-1'>The ingredients will not react</p>
			</div>
		);
	};

	const displayPoisonsButton = () => {
		return (
			<div className='text-sm text-center text-blue-500'>
				<p>
					Show{" "}
					<span
						className='text-green-700 underline cursor-pointer'
						onClick={toggleClickHandler}
					>
						poisons
					</span>{" "}
					instead?
				</p>
			</div>
		);
	};

	const displayPotionsButton = () => {
		return (
			<div className='text-sm text-center text-blue-500'>
				Show{" "}
				<span
					className='text-pink-400 underline cursor-pointer'
					onClick={toggleClickHandler}
				>
					potions
				</span>{" "}
				instead?
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
			{matches && displayMatch()}
			{!matches && displayNoMatch()}
			{showPotions && displayPoisonsButton()}
			{!showPotions && displayPotionsButton()}
		</>
	);
}
