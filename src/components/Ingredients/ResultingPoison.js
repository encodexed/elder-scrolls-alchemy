import Card from "../UI/Card";

export default function ResultingPoison(props) {
   const toggleView = () => {
		props.toggleView();
	};

   const resultTitle = () => {
		return (
			<>
				<h2 className='text-lg'>Here is your expected poison</h2>
				<p className='text-sm text-slate-500'>
					Show{" "}
					<span
						className='text-blue-500 underline cursor-pointer'
						onClick={toggleView}
					>
						potion
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
	);
}
