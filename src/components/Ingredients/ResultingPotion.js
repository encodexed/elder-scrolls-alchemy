import Card from "../UI/Card";

export default function ResultingPotion(props) {
	const toggleView = () => {
		props.toggleView();
	};

	const resultTitle = () => {
		return (
			<>
				<h2 className='text-lg'>Here is your expected potion</h2>
				<p className='text-sm text-slate-500'>
					Show{" "}
					<span
						className='text-blue-500 underline cursor-pointer'
						onClick={toggleView}
					>
						poison
					</span>{" "}
					instead?
				</p>
			</>
		);
	};

	return (
		<div className='border'>
			<Card>
            <div className='flex flex-col text-center'>
               {resultTitle()}
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
	);
}
