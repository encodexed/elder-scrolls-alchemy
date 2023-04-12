import NoInput from "../NoInput";
import Card from "../UI/Card";
import SectionHeader from "../UI/SectionHeader";

export default function ResultingPoison(props) {
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

		let poisonName = "";
		props.effectInfo.forEach((effect) => {
			if (effect.hierarchy === strongest.toString()) {
				poisonName = effect.poisonName;
			}
		});

		return poisonName;
	};

	return (
		<>
			<SectionHeader
				title='Expected Poison'
				link={props.toggleView}
				linkContent={"view potion instead"}
			/>
			<div className='border'>
				<Card>
					<div className='flex flex-col text-center'>
						<h2 className='text-2xl leading-none'>{determineName()}</h2>
						<div className='flex-1'>
							<img
								className='mx-auto'
								src='/images/poisons/Red_Poison.png'
								alt='A poison!'
							/>
						</div>
						<div className='flex flex-col flex-1 text-center'>
							{props.effectInfo.map((effect) => {
								return (
									<div className='mt-3' key={"m" + effect.name}>
										<p
											dangerouslySetInnerHTML={{
												__html: effect.poisonEffect,
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
