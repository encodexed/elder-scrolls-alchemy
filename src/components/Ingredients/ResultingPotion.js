import NoInput from "../NoInput";
import Card from "../UI/Card";
import SectionHeader from "../UI/SectionHeader";

export default function ResultingPotion(props) {
	if (props.effectInfo.length === 0) {
		return (
			<>
				<SectionHeader title='Need Help?' />
				<NoInput />
			</>
		);
	}

	const determineName = () => {
		let strength = [];
		props.effectInfo.forEach((effect) => {
			strength.push(effect.hierarchy);
		});
		const strongest = Math.min(...strength);

		let potionName = "";
		props.effectInfo.forEach((effect) => {
			if (effect.hierarchy === strongest.toString()) {
				potionName = effect.potionName;
			}
		});

		return potionName;
	};

	return (
		<>
			<SectionHeader
				title='Expected Potion'
				link={props.toggleView}
				linkContent={"view poison instead"}
			/>
			<div className='border'>
				<Card>
					<div className='flex flex-col text-center'>
						<h2 className='text-2xl leading-none'>{determineName()}</h2>
						<div>
							<img
								className='mx-auto'
								src='/images/potions/Increase_Armor.png'
								alt='A potion!'
							/>
						</div>
						<div className='flex flex-col text-center'>
							{props.effectInfo.map((effect) => {
								return (
									<div className='mt-3' key={"m" + effect.name}>
										<p
											dangerouslySetInnerHTML={{
												__html: effect.potionEffect,
											}}
											className='text-sm leading-none'
										/>
									</div>
								);
							})}
						</div>
					</div>
				</Card>
			</div>
		</>
	);
}
