import NoInput from "../NoInput";
import Card from "../UI/Card";
import SectionHeader from "../UI/SectionHeader";
import ConcoctionDescription from "../ConcoctionDescription";
import { useState, useEffect } from "react";
import EffectsData from "../../EffectsData";
import NoMatches from "../NoMatches";
import CounterEffect from "./CounterEffect";

export default function Results(props) {
	const [potionName, setPotionName] = useState("Unnamed Potion");
	const [poisonName, setPoisonName] = useState("Unnamed Poison");

	useEffect(() => {
		// Converting effects back into their objects. Was it necessary to split it in the first place? Will check later.
		let effectInfo = [];
		props.matchedEffects.forEach((effect) => {
			for (let i = 0; i < EffectsData.length; i++) {
				if (EffectsData[i].name === effect) {
					effectInfo.push(EffectsData[i]);
				}
			}
		});

		// Determining the names based on hierarchical data for the concoctions.
		let strength = [];
		effectInfo.forEach((effect) => {
			strength.push(effect.hierarchy);
		});
		const strongest = Math.min(...strength);
		effectInfo.forEach((effect) => {
			if (effect.hierarchy === strongest.toString()) {
				setPotionName(effect.potionName);
				setPoisonName(effect.poisonName);
			}
		});
	}, [props.matchedEffects]);

	if (props.matchedEffects.length === 0) {
		if (props.selectedCount > 4) {
			return (
				<>
					<SectionHeader title='Results' />
					<NoMatches conflicts={false} />
				</>
			);
		}
		if (props.counterEffects.length > 0) {
			return (
				<>
					<SectionHeader title='Results' />
					<NoMatches conflicts={true} counterEffects={props.counterEffects} />
				</>
			);
		} else {
			return (
				<>
					<SectionHeader title='Need Help?' />
					<NoInput />
				</>
			);
		}
	}

	return (
		<>
			<SectionHeader title='Results' />
			<div className='border'>
				<CounterEffect counterEffects={props.counterEffects} />
				<div className='flex'>
					<Card>
						<div className='flex flex-col text-center'>
							<h2 className='text-2xl leading-none'>{potionName}</h2>
							<div>
								<img
									className='mx-auto'
									src='/images/potions/Increase_Armor.png'
									alt='A potion!'
								/>
							</div>
							<div className='flex flex-col text-center'>
								{props.matchedEffects.map((effect) => {
									return (
										<ConcoctionDescription
											key={"potion" + effect.name}
											concoctionType='potion'
											effect={effect}
										/>
									);
								})}
							</div>
						</div>
					</Card>
					<div className='flex-shrink my-auto'>OR</div>
					<Card>
						<div className='flex flex-col text-center'>
							<h2 className='text-2xl leading-none'>{poisonName}</h2>
							<div>
								<img
									className='mx-auto'
									src='/images/poisons/Red_Poison.png'
									alt='A poison!'
								/>
							</div>
							<div className='flex flex-col text-center'>
								{props.matchedEffects.map((effect) => {
									return (
										<ConcoctionDescription
											key={"poison" + effect.name}
											concoctionType='poison'
											effect={effect}
										/>
									);
								})}
							</div>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
}
