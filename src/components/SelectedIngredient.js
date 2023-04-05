import RemoveButton from "./UI/RemoveButton";

export default function SelectedIngredient(props) {
	return (
		<div className='flex flex-col items-center flex-1'>
			<div className='w-32 h-32'>
				<div className='absolute'>
					{props.ingredient.id >= 0 && (
						<RemoveButton onClick={props.deselectHandler} />
					)}
				</div>
				<img
					className='w-full'
					src={props.ingredient.src}
					alt={props.ingredient.name}
				/>
			</div>
			<div className='text-center'>
				<h4 className='underline text-md'>{props.ingredient.name}</h4>
				<p className='text-sm leading-none text-slate-500'>
					{props.ingredient.effect1}
					<br />
					{props.ingredient.effect2}
					<br />
					{props.ingredient.effect3}
					<br />
					{props.ingredient.effect4}
				</p>
			</div>
		</div>
	);
}
