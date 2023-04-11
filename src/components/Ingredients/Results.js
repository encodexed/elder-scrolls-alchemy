import SectionHeader from "../UI/SectionHeader";
import { useState } from "react";

export default function Results(props) {
	const [showPotions, setShowPotions] = useState(true);
	const matches = props.matches.length > 0;
	// console.log(props.matches);

	const displayMatch = () => {
		return (
			<>
				<div className='flex text-center border'>
					<div className='flex-1'>
						<img
							className='mx-auto'
							src='/images/potions/Increase_Armor.png'
							alt='A potion!'
						/>
						<p>Potion of Healing</p>
					</div>
					<div className='flex flex-col flex-1 text-center'>
						{props.matches.map((match) => {
							return (
								<div key={"m" + match}>
									<p>{match}</p>
								</div>
							);
						})}
					</div>
				</div>
			</>
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
